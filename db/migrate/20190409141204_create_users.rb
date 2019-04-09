class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, limit: 30, null: false
      t.string :name, limit: 30, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :website, null: false
      t.string :bio, limit: 150, null: false
      t.string :email, null: false
      t.boolean :disabled, null: false, default: false
      
      t.timestamps
    end
      add_index :users, :username, unique: true
      add_index :users, :session_token, unique: true
  end
end
