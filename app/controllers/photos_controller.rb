class PhotosController < ApplicationController
	def index
		@gallery_images = Photo.all
		# will break up by type here if requested
	end

	def new
	end

	def create
	end

	def destroy
	end
end
