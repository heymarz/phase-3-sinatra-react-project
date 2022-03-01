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
    @location = Location.create(state: params[:state])
    @location.attractions.create(attractionName: params[:attractionName])
    @location.restaurants.create(restaurantName: params[:restaurantName])
    @location.to_json(include: [:attractions, :restaurants])
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