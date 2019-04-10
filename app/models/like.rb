class Like < ApplicationRecord
  validates :liker_id, :post_id, presence: true
  validates :liker_id, uniqueness: { scope: :post_id }

  belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User

  belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post
end