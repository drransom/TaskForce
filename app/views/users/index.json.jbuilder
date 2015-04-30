json.array! @taskers.each do |tasker|
  json.id tasker.id
  json.name tasker.name
  json.num_completed tasker.num_completed
  json.profile_url tasker.profile_url
  json.description tasker.description
  json.vehicle tasker.vehicle
  json.location tasker.location
  json.price tasker.price
  json.alive tasker.killers.includes?(current_user)
end
