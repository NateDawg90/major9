class TrackFile < ActiveRecord::Base
  belongs_to :track,
  foreign_key: :track_id,
  primary_key: :id,
  class_name: :Track

  belongs_to :album

  def upload_track(key, filePath)
    s3 = Aws::S3::Resource.new
    s3.bucket('major9').object(key).upload_file(filePath)
  end

  def download_track
  end
end
