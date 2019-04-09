@users.each do |user|
  json.id user.id
  json.name user.name
  json.username user.username
end