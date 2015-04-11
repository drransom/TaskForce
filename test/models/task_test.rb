# == Schema Information
#
# Table name: tasks
#
#  id               :integer          not null, primary key
#  owner_id         :integer          not null
#  tasker_id        :integer
#  title            :string
#  description      :text             not null
#  location         :string           not null
#  vehicle          :string           not null
#  price            :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  task_date        :date
#  time_slot        :integer
#  category         :string
#  user_completed   :boolean          default(FALSE)
#  tasker_completed :boolean          default(FALSE)
#

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
