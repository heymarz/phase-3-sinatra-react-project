class CreateAttractions < ActiveRecord::Migration[6.1]
  
  def change
    create_table :attractions do |t|
      t.string :attractionName
      t.integer :location_id
    end
  end
  
end
