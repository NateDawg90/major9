class CreateTrackFiles < ActiveRecord::Migration
  def change
    create_table :track_files do |t|
      t.integer :user_id, null: false
      t.string :url, null: false
      t.integer :track_id, null: false

      t.timestamps null: false
    end

    add_index :track_files, :track_id
  end
end
