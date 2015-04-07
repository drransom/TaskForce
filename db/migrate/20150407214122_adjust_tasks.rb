class AdjustTasks < ActiveRecord::Migration
  def change
    change_column_null :tasks, :price, true
    change_column :tasks, :completed, :string, null: false
  end
end
