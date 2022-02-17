class LocationsController < ApplicationController
  
  get '/locations' do
    @locations = Location.all
    @locations.to_json(include: [:attractions, :restaurants])
  end

  post '/locations' do
    @locations = Location.create(state: params[:state])
    @locations.to_json(include: [:attractions, :restaurants])
  end

  delete '/locations/:id' do
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