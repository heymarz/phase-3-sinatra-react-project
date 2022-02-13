class Location < ActiveRecod::Base
  has_many :attraction
  has_many :dining
end