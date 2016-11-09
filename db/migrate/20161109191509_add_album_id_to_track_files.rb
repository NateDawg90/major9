class AddAlbumIdToTrackFiles < ActiveRecord::Migration
  def change
    add_column :track_files, :album_id, :integer
  end
end
