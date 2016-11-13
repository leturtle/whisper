class ChatController < ActionController::API
  before_action :authenticate_token

  def user_chat_sessions
    sessions = UserChatSession.where(user_id: @current_user.id, is_visible: true).order(last_message_at: :desc).map do |session|
      {
        id: session.id,
        userId: session.another_user.id,
        username: session.another_user.username,
        newMessagesCount: session.new_messages_count,
        messages: []
      }
    end
    render json: { sessions: sessions, username: @current_user.username, token: @current_user.persistence_token }
  end

  def user_chat_session
    render_user_chat_session(UserChatSession.find(params[:id]))
  end

  def user_chat_session_by_user_id
    from_user_session_ids = UserChatSession.where(user_id: @current_user.id).map(&:chat_session_id)
    to_user_session_ids = UserChatSession.where(user_id: params[:uid]).map(&:chat_session_id)
    session_id = (from_user_session_ids & to_user_session_ids).first
    if session_id
      render_user_chat_session(UserChatSession.find(session_id))
    else
      render json: { session: {}, username: @current_user.username, token: @current_user.persistence_token }
    end
  end

  def users
    users = User.where.not(id: @current_user.id).map do |user|
      {
        userId: user.id,
        username: user.username
      }
    end
    render json: { users: users, username: @current_user.username, token: @current_user.persistence_token }
  end

  def message
    from_user_session_ids = UserChatSession.where(user_id: @current_user.id).map(&:chat_session_id)
    to_user_session_ids = UserChatSession.where(user_id: params[:userId]).map(&:chat_session_id)
    session_id = (from_user_session_ids & to_user_session_ids).first
    now = Time.now
    if session_id
      session = ChatSession.find(session_id)
    else
      session = ChatSession.create
      session.user_chat_sessions.create(
        user_id: @current_user.id,
      )
      session.user_chat_sessions.create(
        user_id: params[:userId]
      )
    end
    session.messages.create(
      user_id: @current_user.id,
      content: params[:content]
    )
    user_chat_session = nil
    session.user_chat_sessions.each do |chat_session|
      chat_session.update(
        last_read_at: now,
        is_visible: true,
        last_message_at: now
      )
      if chat_session.user_id == @current_user.id
        user_chat_session = chat_session
      end
    end
    render_user_chat_session(user_chat_session)
  end

  def hide_user_chat_session
    session = UserChatSession.find_by(id: params[:id], user_id: @current_user.id)
    session.update(is_visible: false) if session
    render json: { id: session.try(:id).to_i, username: @current_user.username, token: @current_user.persistence_token }
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
    render json: {
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
      },
      username: @current_user.username,
      token: @current_user.persistence_token
    }
  end
end
