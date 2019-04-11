class Comment < ApplicationRecord
  validates :body, length: {maximum: 300}, presence: true
  validates :post_id, :author_id, presence: true

  belongs_to :commenter,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post
end