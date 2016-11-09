class Album < ActiveRecord::Base
  validates :artist, :album_name, :release_date, :price, presence: true

  belongs_to :artist,
  foreign_key: :artist_id,
  primary_key: :id,
  class_name: :User

  has_many :tracks

  has_many :track_files,
  through: :tracks,
  source: :track_files
end
