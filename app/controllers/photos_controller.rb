class PhotosController < ApplicationController
	def index
		@gallery_images = Photo.all.order(:id)
	end

	def new
	end

	def create
	end

	def destroy
	end
end
