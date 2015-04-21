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

class User < ActiveRecord::Base
  validates :email, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, uniqueness: true
  validates_format_of :email, with: /.+@.+\..+/i, on: [:create, :save]

  has_many :owned_tasks, class_name: "Task", foreign_key: :owner_id
  has_many :accepted_tasks, class_name: "Task", foreign_key: :tasker_id

  has_many :comments, as: :commentable
  has_many :comments_written, class_name: "Comment", foreign_key: :commenter_id

  has_many :killings_off, class_name: "Killing", foreign_key: :killer_id
  has_many :deaths, class_name: "Killing", foreign_key: :killed_id

  has_many :killed_users, through: :killings_off, source: :killed
  has_many :killers, through: :deaths, source: :killer

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(user_params)
    user = User.find_by_email(user_params[:email])
    (user && user.is_password?(user_params[:password])) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  protected

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
