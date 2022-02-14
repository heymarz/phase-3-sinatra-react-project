class LocationsController < ApplicationController
  
  get '/locations' do
    @locations = Location.all
    @locations.to_json(include: [:attraction] [:dining])
  end

  post '/locations' do
    @attraction = Attraction.find_or_create_by(name: params[:location])
    @dining = Dining.find_or_create_by(name: params[:location])

    if @location.save
      @location.to_json(include: [:attraction][:dining])
    else
      {errors: @location.errors.full_messages}.to_json
    end
  end

  delete '/location/:id' do
    find_location
    if @location
      @location.destroy
      @location.to_json
    else
      { errors: ["Location doesn't exist"]}.to_json
    end
  end

  private
    def find_location
      @location = Location.find_by_id(params[:id])
    end
end