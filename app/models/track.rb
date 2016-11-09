class Track < ActiveRecord::Base
  validates :album, :track_name, :release_date, :price,
            :track_number, presence: true

  belongs_to :album
  has_one :artist,
  through: :album,
  source: :artist

  has_many :track_files,
  foreign_key: :track_id,
  primary_key: :id,
  class_name: :TrackFile

end
