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

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end