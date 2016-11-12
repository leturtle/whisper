class ChatSession < ApplicationRecord
  has_many :user_chat_sessions
  has_many :messages
end
