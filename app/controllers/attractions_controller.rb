class AttractionsController < ApplicationController

  get '/attractions' do
    @attraction = Attraction.all
    @attraction.to_json
  end

  post '/attractions' do
    @attraction = Attraction.create(attractionName: params[:attractionName])
      @attraction.to_json
  end

end