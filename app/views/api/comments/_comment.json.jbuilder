json.extract! comment, :id, :body, :post_id
json.username comment.commenter.username
json.commenter_id comment.commenter.id