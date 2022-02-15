puts "🌱 Seeding spices..."

pennsylvania = Location.create(state: "Pennsylvania") 
chicago = Location.create(state: "Chicago") 
new_york = Location.create(state: "New York") 
colorado = Location.create(state: "Colorado") 
wyoming = Location.create(state: "Wyoming") 
california = Location.create(state: "California") 
arizona = Location.create(state: "Arizona") 
oregon = Location.create(state: "Oregon") 

pennsylvania.Attraction.create(attraction: "Mutter Museum")
chicago.Attraction.create(attraction: "Grant Park and Buckingham Fountain", "Adler Planetarium", "Shedd Aquarium", "Chicago Cultural Center")
new_york.Attraction.create(attraction: "Lake George", "Angry Orchard Vineyard")
colorado.Attraction.create(attraction: "Rocky Mountain National Park", "Mesa Verde National Park")
wyoming.Attraction.create(attraction: "Grand Prismatic Spring")
california.Attraction.create(attraction: "Yosemite National Park", "Vichy Springs")
arizona.Attraction.create(attraction: "Grand Canyon National Park")
oregon.Attraction.create(attraction: "Portland Japanese Garden", "Pittock Mansion", "Crystal Springs Rhododendron Garden")

chicago.Dining.create(place_to_eat: "Superdawg Drive-In", "Lou Malnati's")
new_york.Dining.create(place_to_eat: "SakeMai")
colorado.Dining.create(place_to_eat: "Far View Lounge")
arizona.Dining.create(place_to_eat: "El Tovar Dining Room")
oregon.Dining.create(place_to_eat: "Bhuna", "Casa Zoraya")

puts "✅ Done seeding!"
