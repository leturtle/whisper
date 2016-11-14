class UserChatSession < ApplicationRecord
  belongs_to :user
  belongs_to :chat_session

  delegate :messages, to: :chat_session

  def self.visible_by_user(user_id)
    where(user_id: user_id, is_visible: true).order(last_message_at: :desc)
  end

  def self.chat_session_id_between(user_id_a, user_id_b)
    chat_session_ids_a = where(user_id: user_id_a).map(&:chat_session_id)
    chat_session_ids_b = where(user_id: user_id_b).map(&:chat_session_id)
    (chat_session_ids_a & chat_session_ids_b).first
  end

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
