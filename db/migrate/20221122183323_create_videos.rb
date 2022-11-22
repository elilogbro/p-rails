class CreateVideos < ActiveRecord::Migration[7.0]
  def change
    create_table :videos do |t|
      t.string :embed_code
      t.integer :project_id
      t.timestamps
    end
  end
end
