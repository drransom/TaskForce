# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  owner_id    :integer          not null
#  tasker_id   :integer
#  title       :string           not null
#  description :text             not null
#  location    :string           not null
#  vehicle     :string           not null
#  completed   :string           default("neither"), not null
#  price       :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Task < ActiveRecord::Base
  validates :owner_id, :title, :description, :location, presence: true
  validates :price, numericality: { greater_than_or_equal_to: 0, allow_nil: true }

  belongs_to :owner, class_name: "User", foreign_key: :owner_id
  belongs_to :tasker, class_name: "User", foreign_key: :tasker_id
end
