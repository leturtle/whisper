class SendMessageService
  def call(from_user_id, to_user_id, content)
    @now = Time.now
    chat_session = find_or_create_chat_session(from_user_id, to_user_id)
    chat_session.messages.create(user_id: from_user_id, content: content)
    user_chat_session = nil
    chat_session.user_chat_sessions.each do |chat_session|
      if chat_session.user_id == from_user_id
        user_chat_session = chat_session
        refresh_from_user(chat_session)
      end
      notify_to_user(chat_session) if chat_session.user_id == to_user_id
    end

    user_chat_session
  end

  private

  def find_or_create_chat_session(from_user_id, to_user_id)
    chat_session_id = UserChatSession.chat_session_id_between(from_user_id, to_user_id)
    if chat_session_id
      chat_session = ChatSession.find(chat_session_id)
    else
      chat_session = ChatSession.create
      chat_session.user_chat_sessions.build(user_id: from_user_id)
      chat_session.user_chat_sessions.build(user_id: to_user_id)
    end

    chat_session
  end

  def refresh_from_user(chat_session)
    chat_session.update(is_visible: true, last_message_at: @now, last_read_at: @now)

  end

  def notify_to_user(chat_session)
    chat_session.update(is_visible: true, last_message_at: @now)
    ChatChannel.broadcast_to(chat_session.user_id, id: chat_session.id)
  end
end
