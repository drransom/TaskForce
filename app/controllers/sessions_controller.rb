class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(params[:user])

    if @user
      @user = check_for_guest_login(@user)
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
    if user.email = "guest@starwars.com"
      num_users = User.count()
      user = User.create(
        email: "guest#{num_users}@starwars.com",
        password: "password"
        )
      create_sample_tasks(user)
    end
    user
  end

  def create_sample_tasks user
    Task.create({
      owner_id: user.id,
      title: "Destroy Death Star",
      description: "Create a chain reaction",
      location: "Endor",
      vehicle: "Starship",
      category: "military",
      tasker_id: 1,
      price: User.find(1).price,
      time_slot: Random.rand(4),
      task_date: Date.today - 1
      })

    Task.create({
     owner_id: user.id,
     title: "Move X-wing",
     description: "My X-wing is in a swamp and needs to be removed.",
     location: "Dagobah",
     vehicle: "none",
     category: "moving",
     tasker_id: 5,
     price: User.find(5).price,
     task_date: Date.today() - 3,
     time_slot: Random.rand(4)
     })
   end
end
