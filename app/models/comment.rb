# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  commentable_id   :integer          not null
#  commentable_type :string           not null
#  commenter_id     :integer          not null
#  body             :text             not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Comment < ActiveRecord::Base
  belongs_to :commentable
  belongs_to :comment_author, class_name: "User", foreign_key: :commenter_id
end
