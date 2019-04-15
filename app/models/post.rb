class Post < ApplicationRecord
  validates :author_id, presence: true

  validate :ensure_image

  has_one_attached :image

  def thumbnail 
    return self.image.variant(combine_options: { resize: "x300^", extent: "300x300", gravity: "center"})
  end

  def ensure_image
    unless self.image.attached?
      errors[:image] << "Must be attached"
    end
  end

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes

  has_many :likers,
    through: :likes,
    source: :liker

  has_many :comments
end