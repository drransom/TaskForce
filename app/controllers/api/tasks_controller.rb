module Api

  class TasksController < ApplicationController
    def create
      @task = Task.new(task_params);
      @task.owner_id = current_user.id
      if @task.save
        render json: @task
      else
        puts "unsuccessful save"
        render json: @task.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @task = Task.find(params[:id])
      if @task.update(task_params)
        render json: @task
      else
        puts "unsuccessful save"
        render json: @task.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index
      @tasks = Task.where(owner_id: current_user.id).includes(:tasker)
      render :index
    end

    def task_params
      params.require(:task).permit(:owner_id, :title, :description, :location,
        :task_date, :time_slot, :vehicle, :price, :tasker_id, :category,
        :user_completed, :tasker_completed, :rating)
    end
  end
end
