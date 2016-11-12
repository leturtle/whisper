class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.belongs_to :user
      t.belongs_to :chat_session
      t.string :content
      t.timestamps
    end
  end
end
