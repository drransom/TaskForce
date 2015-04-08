class UsersController < ApplicationController
  def new
  end

  def index
    taskers = find_taskers.where(user_filter).limit(3)
    if taskers.empty?
      render json: 'sorry, no users found'
    else
      render json: taskers
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def match_taskers
    @task = Task.new(task_params)
    @task.owner_id = current_user.id
    if @task.valid?
      users = User.where(location: @task.location, vehicle: task.vehicle).limit(3)
      render json: users
    else
      render json: @task.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def user_filter
    options = {}
    filter_params = [:location, :vehicle]
    filter_params.each do |filter_param|
      options[:filter_param] = params[:filter_param] if params[:filter_param]
    end
    options
  end

  def find_taskers
    User.where(tasker: true)
  end

end
