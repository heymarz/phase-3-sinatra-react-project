class AttractionsController < ApplicationController

  get '/attractions' do
    @attraction = Attraction.all
    @attraction.to_json
  end


end