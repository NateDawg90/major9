class Api::SearchController < ApplicationController

  def index
    @tracks = Track.all
    if params[:search] && !params[:search].empty?
      @results = Track.joins(:artist).where("lower(track_name) LIKE :query OR lower(artist_name) LIKE :query", {query: "%#{params[:search].downcase}%"}).limit(5)
    end
  end

end
