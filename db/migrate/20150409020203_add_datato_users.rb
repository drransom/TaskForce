class AddDatatoUsers < ActiveRecord::Migration
  def change
    add_column :users, :profile_url, :string
    add_column :users, :price, :integer
    add_column :users, :num_completed, :integer, default: 0
    add_column :users, :name, :string
  end
end
