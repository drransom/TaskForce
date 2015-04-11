class ChangeRatedtoInt < ActiveRecord::Migration
  def change
    remove_column :tasks, :rated
    add_column :tasks, :rating, :integer, default: 0
  end
end
