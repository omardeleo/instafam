class Follow < ApplicationRecord
  validates :followee_id, uniqueness: { scope: :follower_id }
  validate :cannot_follow_self, on: :create

  def cannot_follow_self
    if follower_id === followee_id
      errors.add(:followee_id, "can't be the same as follower")
    end
  end

  belongs_to :follower,
  foreign_key: :follower_id,
  class_name: 'User'

  belongs_to :followed,
  class_name: 'User',
  foreign_key: :followee_id
end