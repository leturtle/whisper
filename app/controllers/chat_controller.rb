class ChatController < ActionController::API
  before_action :authenticate_token

  def user_chat_sessions
    sessions = UserChatSession.visible_by_user(@current_user.id).map do |session|
      {
        id: session.id,
        userId: session.another_user.id,
        username: session.another_user.username,
        newMessagesCount: session.new_messages_count,
        messages: []
      }
    end
    render_with_authentication(sessions: sessions)
  end

  def user_chat_session
    render_user_chat_session(UserChatSession.find(params[:id]))
  end

  def user_chat_session_by_user_id
    chat_session_id = UserChatSession.chat_session_id_between(@current_user.id, params[:uid])
    if chat_session_id
      render_user_chat_session(UserChatSession.find_by(chat_session_id: session_id, user_id: @current_user.id))
    else
      render_with_authentication(session: {})
    end
  end

  def users
    users = User.where.not(id: @current_user.id).map do |user|
      {
        userId: user.id,
        username: user.username
      }
    end
    render_with_authentication(users: users)
  end

  def message
    user_chat_session = SendMessageService.new.call(@current_user.id, params[:userId].to_i, params[:content])
    render_user_chat_session(user_chat_session)
  end

  def hide_user_chat_session
    session = UserChatSession.find_by(id: params[:id], user_id: @current_user.id)
    session.update(is_visible: false) if session
    render_with_authentication(id: session.try(:id).to_i)
  end

  def delete_message
    message = Message.find_by(id: params[:id], user_id: @current_user.id)
    message.delete if message
    render_with_authentication(id: message.try(:id).to_i)
  end

  private

  def authenticate_token
    @current_user = authenticate(params[:token])
    render json: { username: '', token: '' } unless @current_user
  end

  def authenticate(token)
    User.find_by(persistence_token: token)
  end

  def render_user_chat_session(session)
    session.update(last_read_at: Time.now)
    render_with_authentication(
      session: {
        id: session.id,
        userId: session.another_user.id,
        username: session.another_user.username,
        newMessagesCount: 0,
        messages: session.messages.map { |message|
          {
            id: message.id,
            isSentFromMe: message.user_id == session.user_id,
            content: message.content,
            time: message.created_at.to_s(:db)
          }
        }
      }
    )
  end

  def render_with_authentication(result)
    render json: { username: @current_user.username, token: @current_user.persistence_token }.merge(result)
  end
end
