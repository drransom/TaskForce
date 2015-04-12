class AddLifetoTaskers < ActiveRecord::Migration
  def change
    add_column :users, :alive, :boolean, default: true
  end
end
