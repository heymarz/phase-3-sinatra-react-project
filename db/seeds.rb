puts "🌱 Seeding spices..."

Location.create(state: "Pennsylvania") 
Location.create(state: "Chicago") 
Location.create(state: "New York") 
Location.create(state: "Colorado") 
Location.create(state: "Wyoming") 
Location.create(state: "California") 
Location.create(state: "Arizona") 
Location.create(state: "Oregon") 

Attraction.create(attraction: "Mutter Museum")
Attraction.create(attraction: "Grant Park and Buckingham Fountain", "Adler Planetarium", "Shedd Aquarium", "Chicago Cultural Center")
Attraction.create(attraction: "Lake George", "Angry Orchard Vineyard")
Attraction.create(attraction: "Rocky Mountain National Park", "Mesa Verde National Park")
Attraction.create(attraction: "Grand Prismatic Spring")
Attraction.create(attraction: "Yosemite National Park", "Vichy Springs")
Attraction.create(attraction: "Grand Canyon National Park")
Attraction.create(attraction: "Portland Japanese Garden", "Pittock Mansion", "Crystal Springs Rhododendron Garden")

Dining.create(place_to_eat: nil)
Dining.create(place_to_eat: "Superdawg Drive-In", "Lou Malnati's")
Dining.create(place_to_eat: "SakeMai")
Dining.create(place_to_eat: "Far View Lounge")
Dining.create(place_to_eat: nil)
Dining.create(place_to_eat: nil)
Dining.create(place_to_eat: "El Tovar Dining Room")
Dining.create(place_to_eat: "Bhuna", "Casa Zoraya")

puts "✅ Done seeding!"
