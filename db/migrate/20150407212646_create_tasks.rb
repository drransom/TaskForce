class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :owner_id, null: false
      t.integer :tasker_id
      t.string :title, null: false
      t.text :description, null: false
      t.string :location, null: false
      t.string :vehicle, null: false
      t.boolean :completed, null: false, default: false
      t.integer :price, null: false

      t.timestamps null: false
    end
    add_index :tasks, :tasker_id
    add_index :tasks, :owner_id
    add_index :tasks, :location
  end
end
