class TrackFile < ActiveRecord::Base
  belongs_to :track,
  foreign_key: :track_id,
  primary_key: :id,
  class_name: :Track

  belongs_to :album
end
