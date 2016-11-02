class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.integer :album_id, null: false
      t.date :release_date, null: false
      t.boolean :downloadable, default: true
      t.decimal :price, null: false, precision: 8, scale: 2
      t.boolean :fixed_price, default: false
      t.text :description
      t.string :image_url
      t.text :about
      t.text :artist_info
      t.text :lyrics
      t.text :credits
      t.boolean :bonus, default: false
      t.text :track_name, null: false
      t.timestamps null: false
      t.integer :track_number, null:false
    end
  end
end
