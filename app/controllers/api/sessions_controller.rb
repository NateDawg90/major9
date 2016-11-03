class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password])
    if @user
      login!(@user)
      render "api/users/show"
    else
      if User.find_by(username:user_params[:username])
        render json: ["Password is invalid"], status: 404
      else
        render json: ["Username is invalid", "Password is invalid"], status: 404
      end
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ["No User Signed In"], status: 404
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
