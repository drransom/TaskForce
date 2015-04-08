class OptionalTitle < ActiveRecord::Migration
  def change
    change_column_null :tasks, :title, true
  end
end
