class UsersController < ApplicationController
  def new
  end

  def show
    @user = User.find(params[:id])
    @killed_users = current_user.killed_users
    if @user
      @comments = Comment.joins(:comment_author).where({commentable_id: @user.id})
      render :show
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @taskers = find_taskers.includes(:killers).where(user_filter)
    @user = current_user
    @taskers = @taskers.select { |tasker| !tasker.killers.include? @user }

    if @taskers.empty?
      render json: 'sorry, no users found'
    else
      render :index
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
      if @user.owned_tasks.empty?
        @user.create_sample_tasks
      end
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def update
    @user = User.includes(:killers).find(params[:id])
    if params[:alive] == false #don't want nil to trigger death
      @user = kill_or_remain_dead(@user)
    end
    if params[:user].empty? || @user.update(user_params)
      render json: :update
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :tasker,
                                 :name, :location, :description,
                                 :profile_url, :price)
  end

  def kill_or_remain_dead (user)
    unless user.killers.include?(current_user)
      current_user.kill(user)
      user = User.includes(:killers).find(user.id)
    end
    return user
  end


  def user_filter
    options = {}
    filter_params = [:location, :vehicle]
    filter_params.each do |filter_param|
      unless filter_param == :vehicle && params[filter_param] == "no vehicle"
        options[filter_param] = params[filter_param] if params[filter_param]
      end
    end
    options
  end

  def find_taskers
    User.where(tasker: true)
  end

end
