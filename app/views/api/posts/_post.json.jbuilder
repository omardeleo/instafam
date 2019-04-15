json.extract! post, :id, :author_id, :caption, :created_at
json.username post.author.username
if post.author.image.attached? 
  json.avatarUrl url_for(post.author.avatar)
else 
  json.avatarUrl asset_url('default.jpg')
end
json.imageUrl url_for(post.image)
json.thumbUrl url_for(post.thumbnail)
json.commentIds post.comments.pluck(:id)
json.likers post.likers do |liker| 
              json.id liker.id
              json.username liker.username
            end
json.comments do
  post.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end