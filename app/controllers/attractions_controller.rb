class AttractionsController < ApplicationController

  get '/attractions' do
    @attractions = Attraction.all
    @attractions.to_json
  end

  post '/attractions' do
    @attractions = Attraction.create(attractionName: params[:attractionName])
      @attractions.to_json
  end

end