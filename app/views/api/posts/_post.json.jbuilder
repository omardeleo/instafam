json.extract! post, :id, :author_id, :caption, :created_at
json.username post.author.username
json.imageUrl url_for(post.image)