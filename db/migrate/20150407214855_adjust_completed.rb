class AdjustCompleted < ActiveRecord::Migration
  def change
    change_column :tasks, :completed, :string, default: "neither"
  end
end
