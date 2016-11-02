class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.where(artist_id: params[:artist_id])
    # Shape for object should be {artist_id: #}
  end

  def create
    @album = Album.new(album_params)
    @album.artist_id = current_user.id
    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def show
    @album = Album.find(params[:id])
  end

  def update
    @album = Album.find(params[:id])
    if @album.update(album_params)
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = Album.find(params[:id])
    if @album.destroy
      render json: @album
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  private
  def album_params
    params.require(:album).permit(:artist_id, :album_name, :release_date,
    :downloadable, :price, :fixed_price, :description, :image_url, :artist,
    :about, :credits)
  end

end
