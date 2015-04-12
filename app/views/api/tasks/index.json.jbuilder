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
  json.rating task.rating
  if task.tasker
    json.tasker_name task.tasker.name
    json.tasker_profile_url task.tasker.profile_url
    json.tasker_alive task.tasker.alive
  else
    json.tasker_name nil
    json.tasker_profile_url nil
    json.tasker_alive nil
  end
end
