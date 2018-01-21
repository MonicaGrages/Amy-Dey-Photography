class PhotosController < ApplicationController
	def index
		@gallery_images = Photo.all
	end
end
