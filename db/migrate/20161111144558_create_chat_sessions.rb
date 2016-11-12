class CreateChatSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :chat_sessions do |t|

      t.timestamps
    end
  end
end
