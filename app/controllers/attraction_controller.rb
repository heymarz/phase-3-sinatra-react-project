require 'pry'
class AttractionsController < ApplicationController

  get '/attractions' do
    @attractions = Attraction.all
    @attractions.to_json(include: [:location])
    end

  get '/attractions/:id' do
    find_attraction.to_json(include: [:location])
  end

  #needs adjusting
  patch '/attractions/:id' do
    find_attraction
    @attraction.update(name: params[:name])

    if @attraction.save
      @attraction.to_json(include: [:state])
    else
      { errors: @attraction.errors.full_messages }.to_json
    end
  end

  delete '/attractions/:id' do
    find_attraction
    if @attraction
      @attraction.destroy
      @attraction.to_json
    else
      { errors: ["This attraction doesn't exist"]}.to_json
    end
  end

  private
    def find_attraction
      @attraction = Attraction.find_by_id(params[:id])
    end

end