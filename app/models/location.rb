class Location < ActiveRecord::Base
  has_many :attraction
  has_many :dining
end