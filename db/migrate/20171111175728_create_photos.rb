class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :imgur_url

      t.timestamps
    end
  end
end
