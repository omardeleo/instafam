class Post < ApplicationRecord
  validates :author_id, presence: true

  has_one_attached :image

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes

  has_many :likers,
    through: :likes,
    source: :liker

  has_many :comments
end