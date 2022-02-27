class CreateRestaurants < ActiveRecord::Migration[6.1]
  
  def change
    create_table :restaurants do |t|
      t.string :restaurantName
      t.integer :location_id
    end
  end

end
