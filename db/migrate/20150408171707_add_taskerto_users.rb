class AddTaskertoUsers < ActiveRecord::Migration
  def change
    add_column :users, :tasker, :boolean, default: false
  end
end
