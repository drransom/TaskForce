class RemoveAlive < ActiveRecord::Migration
  def change
    remove_column :users, :alive
  end
end
