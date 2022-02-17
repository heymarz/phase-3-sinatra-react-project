class  RestaurantController < ApplicationController

  get '/restaurants' do
    @restaurants = Restaurant.all
    @restaurants.to_json
  end

  post '/restaurants' do
    @restaurant = Restaurant.find_or_create_by(name: params[:name])
  end

  
end