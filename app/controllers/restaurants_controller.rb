class  RestaurantsController < ApplicationController

  get '/restaurants' do
    @restaurants = Restaurant.all
    @restaurants.to_json
  end

  post '/restaurants' do
    @restaurant = Restaurant.create(restaurantName: params[:restaurantName])
    @Restaurant.to_json
  end


end