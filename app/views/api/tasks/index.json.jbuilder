json.array! @tasks do |task|
  json.id task.id
  json.user_completed task.user_completed
  json.tasker_completed task.tasker_completed
  json.tasker_id task.tasker_id
  json.category task.category
  json.price task.price
  json.location task.location
  json.date task.task_date
  json.time task.time_slot
  json.tasker_name task.tasker ? task.tasker.name : nil
  json.tasker_profile_url task.tasker ? task.tasker.profile_url : nil
end
