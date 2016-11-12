class CreateUserChatSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :user_chat_sessions do |t|
      t.belongs_to :user
      t.belongs_to :chat_session
      t.datetime :last_read_at
      t.boolean :is_visible
      t.datetime :last_message_at

      t.timestamps
    end
  end
end
