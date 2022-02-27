class LocationsController < ApplicationController
  
  get '/locations' do
    @locations = Location.all
    @locations.to_json(include: [:attractions, :restaurants])
  end

  get'/locations/:id' do
    find_location
    @locations.to_json(include: [:attractions, :restaurants])
  end

  #create new locations
  #also create the new attraction and restaurant included in the post request
  post '/locations' do
    @locations = Location.create(state: params[:state])
    @attractions = @locations.attractions.create(attractionName: params[:attractionName])
    @restaurants = @locations.restaurants.create(restaurantName: parmas[:restaurantName])
    @locations.to_json
    @attractions.to_json
    @restaurants.to_json
  end

  delete '/locations/:id' do
    find_location
    if @location
      @location.destroy
      @location.to_json
    else
      { errors: ["This location doesn't exist"]}.to_json
    end
  end

    def find_location
      @location = Location.find_by_id(params[:id])
    end
end