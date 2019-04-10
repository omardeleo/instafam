class AddIndexToLikes < ActiveRecord::Migration[5.2]
  def change
    change_column_null :likes, :liker_id, false
    change_column_null :likes, :post_id, false
  end
end
