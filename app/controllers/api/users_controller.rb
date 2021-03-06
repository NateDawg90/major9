class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    @user.artist_name ||= user_params[:username]
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
