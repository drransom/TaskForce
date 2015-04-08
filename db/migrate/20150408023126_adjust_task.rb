class AdjustTask < ActiveRecord::Migration
  def change
    add_column :tasks, :task_date, :date
    add_column :tasks, :time_slot, :integer
  end
end
