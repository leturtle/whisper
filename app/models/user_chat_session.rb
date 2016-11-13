class UserChatSession < ApplicationRecord
  belongs_to :user
  belongs_to :chat_session

  delegate :messages, to: :chat_session

  def another_user
    chat_session.user_chat_sessions.where.not(user_id: user_id).first.user
  end

  def new_messages_count
    if last_read_at
      messages.where('user_id <> ? AND created_at > ?', user_id, last_read_at).count
    else
      messages.where('user_id <> ?', user_id).count
    end

  end
end
