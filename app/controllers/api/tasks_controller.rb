module Api

  class TasksController < ApplicationController
    def create
      @task = Task.new(task_params);
      @task.owner_id = current_user.id
      if @task.save
        render json: @task
      else
        render json: @task.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @task = Task.find(params[:id])
      if @task.update(task_params)
        render json: @task
      elsif
        render json: @task.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index
      @tasks = Task.where(owner_id: current_user.id).includes(:tasker)
      @killed_taskers = current_user.killed_users
      render :index
    end

    def task_params
      task_params = params.require(:task).permit(:owner_id, :title,
        :description, :location, :task_date, :time_slot, :vehicle, :price,
        :tasker_id, :category, :user_completed, :tasker_completed, :rating)
      if task_params[:description] && !task_params[:description].empty?
        task_params[:description] = task_params[:description].html_safe
      else
        task_params[:description] = "No description entered yet."
      end
      if task_params[:title]
        task_params[:title] = task_params[:title].html_safe
      end
      task_params
    end
  end
end
