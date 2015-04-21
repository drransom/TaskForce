class CreateKillings < ActiveRecord::Migration
  def change
    create_table :killings do |t|
      t.integer :killer_id, null: false, index: true
      t.integer :killed_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
