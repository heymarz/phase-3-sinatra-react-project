class CreateDinings < ActiveRecord::Migration[6.1]
  
  def change
    create_table :dining do |t|
      t.string :dining
      t.integer :location_id
    end
  end

end
