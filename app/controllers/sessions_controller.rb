class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(params[:user])

    if @user
      @user = check_for_guest_login(@user)
      @user.create_sample_tasks if @user.owned_tasks.empty?
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid email and/or password"]
      render :new
    end
  end

  def destroy
    sign_out!
    redirect_to new_session_url
  end

  private

  def check_for_guest_login user
    if user.email == "guest@starwars.com"
      num_users = User.count()
      user = User.create(
        email: "guest#{num_users}@starwars.com",
        password: "password"
        )
    end
    user
  end
end
