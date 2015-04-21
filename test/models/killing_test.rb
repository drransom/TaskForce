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

require 'test_helper'

class KillingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
