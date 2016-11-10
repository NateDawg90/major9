class Api::TrackFilesController < ApplicationController

  def create
    @track_file = TrackFile.new(track_file_params)
    @track_file.uploadTrack(@track_file.track_name)
    @track_file.user_id = current_user.id
    if @track_file.save
      render json: @track_file
    else
      render json: @track_file.errors.full_messages, status: 422
    end
  end

  def sign_url
    aws_resource = Aws::S3::Resource::new
    @signedUrl = aws_resource.bucket('major9').object(params[:objectName]).presigned_url(:get,expires_in: 1*20.minutes)
    debugger
  end
  #
  # def sign_url
  #   s3 = Aws::S3::Resource.new
  #   obj = s3.bucket('major9').object(key)
  #   obj.upload_file(filePath, acl:'public-read')
  #   return obj.public_url
  # end

  def update
    @track_file = TrackFile.find(params[:id])

    if @track_file
      render json: @track_file
    else
      render json: @track_file.errors.full_messages, status: 422
    end
  end

  def show
    @track_file = TrackFile.find(track_id:track_file_params[:track_id])
    if @track_file
      render json: @track_file
    else
      render json: @track_file.errors.full_messages, status: 404
    end
  end

  def delete
    if @track_file = TrackFile.destroy(params[:id])
      render json: ["File destroyed"]
    else
      render json: ["File cannot be found"], status: 404
    end
  end

  private
  def track_file_params
    params.require(:track_file).permit(:url, :track_id, :filePath)
  end
end
