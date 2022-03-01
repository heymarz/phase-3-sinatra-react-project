class  RestaurantsController < ApplicationController

  get '/restaurants' do
    @restaurant = Restaurant.all
    @restaurant.to_json
  end

  post '/restaurants' do
    @restaurant = Restaurant.create(restaurantName: params[:restaurantName])
    @Restaurant.to_json
  end


end