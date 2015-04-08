class TasksController < ApplicationController
  def create
    debugger
    @task = Task.new(task_params);
    if @task.save
      redirect_to root_url
    else
      fail
    end
  end

  def task_params
    params.require(:task).permit(:owner_id, :title, :description, :location,
      :task_date, :timeslot, :vehicle, :completed, :price)
  end
end
