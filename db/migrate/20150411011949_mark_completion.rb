class MarkCompletion < ActiveRecord::Migration
  def change
    remove_column :tasks, :completed
    add_column :tasks, :user_completed, :boolean, default: false
    add_column :tasks, :tasker_completed, :boolean, default: false
  end
end
