class Api::TracksController < ApplicationController
  def index
    @tracks = Track.where(album_id: params[:album_id]).order('release_date')
  end

  def create
    @track = Track.new(track_params)
    @track.album_id = params[:album_id]
    album = Album.find(params[:album_id])
    @track.track_number = album.tracks.length + 1
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.find_by(track_number: params[:id],
      album_id: params[:album_id])
  end

  def update
    @track = Track.find_by(track_number: params[:id],
      album_id: params[:album_id])
    if @track.update(track_params)
      render :show
    else
      render json: ["Track Not Found"], status: 422
    end
  end

  def destroy
    @track = Track.find_by(track_number: params[:id],
      album_id: params[:album_id])
    if @track.destroy
      render json: @track
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  private
  def track_params
    params.require(:track).permit(:track_name, :release_date,
    :downloadable, :price, :fixed_price, :description, :image_url, :artist,
    :about, :lyrics, :credits, :bonus)
  end
end
