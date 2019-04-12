json.extract! user, :id, :username, :name
json.avatarUrl url_for(user.avatar)