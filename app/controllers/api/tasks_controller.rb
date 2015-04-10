module Api

  class TasksController < ApplicationController
    def create
      @task = Task.new(task_params);
      @task.owner_id = current_user.id
      if @task.save
        render json: @task
      else
        puts "unsuccessful save"
        render json: @task.errors.full_messages
      end
    end

    def task_params
      params.require(:task).permit(:owner_id, :title, :description, :location,
        :task_date, :time_slot, :vehicle, :completed, :price, :tasker_id, :category)
    end
  end
end
