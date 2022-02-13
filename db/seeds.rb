puts "🌱 Seeding spices..."

Location.create(name: "Pennsylvania" attraction: "Mutter Museum" dining: nil)
Location.create(name: "Chicago" attraction: "Grant Park and Buckingham Fountain", "Adler Planetarium", "Shedd Aquarium", "Chicago Cultural Center" dining: "Superdawg Drive-In", "Lou Malnati's")
Location.create(name: "New York" attraction: "Lake George", "Angry Orchard Vineyard" dining: "SakeMai")
Location.create(name: "Colorado" attraction: "Rocky Mountain National Park", "Mesa Verde National Park" dining: "Far View Lounge")
Location.create(name: "Wyoming" attraction: "Grand Prismatic Spring" dining: nil)
Location.create(name: "California" attraction: "Yosemite National Park", "Vichy Springs" dining: nil)
Location.create(name: "Arizona" attraction: "Grand Canyon National Park" dining: "El Tovar Dining Room")
Location.create(name: "Oregon" attraction: "Portland Japanese Garden", "Pittock Mansion", "Crystal Springs Rhododendron Garden" dining: "Bhuna", "Casa Zoraya")

puts "✅ Done seeding!"
