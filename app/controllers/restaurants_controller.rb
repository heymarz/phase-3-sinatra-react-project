class  RestaurantController < ApplicationController

  get '/restaurants' do
    @restaurants = Restaurant.all
    @restaurants.to_json
  end

  patch '/restaurants/:id' do
    @restaurant = Restaurant.find_by_id(params[:id])
    @Restaurant.update(name: params[:name])
  end


end