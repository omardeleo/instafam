json.extract! post, :id, :author_id, :caption, :created_at
json.username post.author.username
json.imageUrl url_for(post.image)
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