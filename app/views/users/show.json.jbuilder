json.id @user.id
json.name @user.name
json.num_completed @user.num_completed
json.profile_url @user.profile_url
json.description @user.description
json.vehicle @user.vehicle
json.location @user.location
json.price @user.price
json.alive @user.killers.include?(current_user)
json.comments @comments do |comment|
  json.body comment.body
  json.id comment.id
  json.commenter_profile_url comment.comment_author.profile_url
  json.commenter_alive comment.comment_author.alive
  if comment.comment_author.name && comment.comment_author.name.length > 0
    json.author_name comment.comment_author.name
  else
    json.author_name comment.comment_author.email
  end
end
