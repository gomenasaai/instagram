class Post < ActiveRecord::Base

	has_attached_file :image, 
	styles: {thumb: '300x300>'},
	storage: :s3,
    s3_credentials: {
      bucket: 'instagram_vm',
      access_key_id: Rails.application.secrets.s3_access_key,
      secret_access_key: Rails.application.secrets.s3_secret_key
    }

	validates_attachment_content_type :image, :content_type => /\Aimage\/.*\z/

	belongs_to :user
	has_and_belongs_to_many :tags

	def tag_names
	end

	def tag_names=(tag_list)
	end

end
 