class UpdateUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:users, :website, true, nil)
    change_column_null(:users, :bio, true, nil)
  end
end
