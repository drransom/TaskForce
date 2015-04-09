json.array! @taskers.each do |tasker|
  json.id tasker.id
  json.name tasker.name
  json.num_completed tasker.num_completed
  json.profile_url tasker.profile_url
end
