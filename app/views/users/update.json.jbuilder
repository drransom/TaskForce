json.id @user.id
json.name @user.name
json.num_completed @user.num_completed
json.profile_url @user.profile_url
json.description @user.description
json.vehicle @user.vehicle
json.location @user.location
json.price @user.price
json.alive !@user.killers.include?(current_user)
