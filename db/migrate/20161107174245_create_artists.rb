class CreateArtists < ActiveRecord::Migration
  def change
    add_column :users, :location, :string
    add_column :users, :about, :text
    add_column :users, :artist_name, :string
  end
end
