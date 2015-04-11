json.array! @tasks do |task|
  json.id task.id
  json.tasker_id task.tasker_id
  json.category task.category
  json.price task.price
  json.location task.location
  json.completed task.completed
  json.date task.task_date
  json.time task.time_slot
  json.tasker_name task.tasker ? task.tasker.name : nil
  json.tasker_profile_url task.tasker ? task.tasker.profile_url : nil
end
