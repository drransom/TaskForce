# == Schema Information
#
# Table name: killings
#
#  id         :integer          not null, primary key
#  killer_id  :integer          not null
#  killed_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Killing < ActiveRecord::Base
  belongs_to :killer, class_name: "User", foreign_key: :killer_id
  belongs_to :killed, class_name: "User", foreign_key: :killed_id
end
