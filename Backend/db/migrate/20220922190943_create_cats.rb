class CreateCats < ActiveRecord::Migration[7.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :age
      t.string :location
      t.string :anthem
      t.string :movie
      t.text :enjoys
      t.string :joke
      t.text :image

      t.timestamps
    end
  end
end
