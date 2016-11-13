class Message < ApplicationRecord
  acts_as_paranoid
  
  belongs_to :chat_session
end
