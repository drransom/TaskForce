class AddRatedToTask < ActiveRecord::Migration
  def change
    add_column :tasks, :rated, :boolean, default: false
  end
end
