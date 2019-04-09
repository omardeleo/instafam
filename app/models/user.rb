# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string(30)       not null
#  name            :string(30)       not null
#  password_digest :string           not null
#  session_token   :string           not null
#  website         :string           not null
#  bio             :string(150)      not null
#  email           :string           not null
#  disabled        :boolean          default(FALSE), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    
    attr_reader :password

    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    # has_many :posts,
    #     foreign_key: :author_id,
    #     class_name: :Post

    # has_many :likes,
    #     foreign_key: :liker_id

    # has_many :comments,
    #     foreign_key: :author_id,
    #     class_name: :Comment

    # has_many(
    #     :followerships,
    #     class_name: 'Follow',
    #     foreign_key: :followee_id,
    #     primary_key: :id
    # )

    # has_many :followers, 
    #     through: :followerships, 
    #     source: :follower

    # has_many(
    #     :followingships,
    #     class_name: 'Follow',
    #     foreign_key: :follower_id,
    #     primary_key: :id
    # )

    # has_many :followings, 
    #     through: :followingships, 
    #     source: :followed

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    private

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end
end