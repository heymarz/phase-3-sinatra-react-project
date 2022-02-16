class AttractionsController < ApplicationController

  get '/attractions' do
    @attractions = Attraction.all
    @attractions.to_json(include: [:location])
    end

  post '/attraction' do
    @location = Location.find_or_create_by(name: params[:state])
    @attraction = @location.attraction.build(params[:attraction])

    if @attraction.save
      @attraction.to_json(include: [:state])
    else
      { errors: @attraction.errors.full_messages }.to_json
    end
  end

  private
    def find_attraction
      @attraction = Attraction.find_by_id(params[:id])
    end

end