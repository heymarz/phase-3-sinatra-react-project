class CreateAttractions < ActiveRecord::Migration[6.1]
  
  def change
    create_table :attraction do |t|
      t.string :attraction
      t.integer :location_id
    end
  end
  
end
