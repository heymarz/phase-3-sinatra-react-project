class  RestaurantsController < ApplicationController

  get '/restaurants' do
    @restaurant = Restaurant.all
    @restaurant.to_json
  end


end