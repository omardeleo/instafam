class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :post_id
      t.integer :liker_id

      t.timestamps
    end

    add_index :likes, [:post_id, :liker_id], unique: true
    add_index :likes, :liker_id
  end
end
