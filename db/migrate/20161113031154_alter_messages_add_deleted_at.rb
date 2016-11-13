class AlterMessagesAddDeletedAt < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :deleted_at, :datetime
  end
end
