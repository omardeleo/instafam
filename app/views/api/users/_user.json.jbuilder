json.extract! user, :id, :username, :name

if user.image.attached? 
    json.avatarUrl url_for(user.avatar)
else 
    json.avatarUrl asset_url('default.jpg')
end