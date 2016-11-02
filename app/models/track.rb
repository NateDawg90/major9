class Track < ActiveRecord::Base
  validates :album, :track_name, :release_date, :price,
            :track_number, presence: true

  belongs_to :album
  has_one :artist,
  through: :album,
  source: :artist

end
