# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  tasker          :boolean          default(FALSE)
#  vehicle         :string
#  location        :string
#  description     :text
#  profile_url     :string
#  price           :integer
#  num_completed   :integer          default(0)
#  name            :string
#  alive           :boolean          default(TRUE)
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
