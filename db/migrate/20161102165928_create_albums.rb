class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.integer :artist_id, null: false
      t.string :album_name, null: false
      t.date :release_date, null: false
      t.boolean :downloadable, default: true
      t.decimal :price, null: false, precision: 8, scale: 2
      t.boolean :fixed_price, default: false
      t.text :description
      t.string :image_url
      t.string :artist_info
      t.text :about
      t.text :credits

      t.timestamps null: false
    end
  end
end
