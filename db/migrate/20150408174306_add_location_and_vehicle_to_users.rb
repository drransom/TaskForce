class AddLocationAndVehicleToUsers < ActiveRecord::Migration
  def change
    add_column :users, :vehicle, :string
    add_column :users, :location, :string
  end
end
