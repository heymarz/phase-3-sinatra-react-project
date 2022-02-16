class LocationsController < ApplicationController
  
  get '/locations' do
    "Hello World"
    @locations = Location.all
    @locations.to_json(include: [:attractions, :restaurants])
  end

  post '/locations' do
    @location = Location.find_or_create_by(name: params[:state])
    
    if @location.save
      @location.to_json include: [:attractions, :restaurants]
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