# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username:"Guest", password:"123456", artist_name: "Greatest Recruiter",
about:"This recruiter has the best music in the world!")
User.create(username:"Andrew", password:"hunter2", artist_name:"DJ Saitae",
about:"Local Guitarist Looking for Musical Love", location:"San Jose")
User.create(username:"jWeckl", password:"573573", artist_name:"Jimmy Weckl",
about:"Underrated Jazz Musician from Japan. Ex-Konami In-house Artist.", location:"Tokyo")
User.create(username:"neko", password:"573573", artist_name:"Nekomata Master",
about:"Best musician in Konami. Loves cats.", location: "Tokyo")

Album.create(
  artist_id:2,
  album_name:"The Jazziest",
  price: 5,
  release_date:Date.new,
  description: "This is a jazz album.",
  image_url: "http://www.ibanez.com/products/images/sig/models/PM200_NT_00_01.png",
  about: "This album isn't real yet.",
  credits: "Target for having the best deals.",
  )
Album.create(artist_id:2, album_name:"The Funkiest", price: 10, release_date:Date.new)
Album.create(artist_id:1, album_name:"Greatest Hits from the Greatest Recruiter", price: 30, release_date:Date.new)
Album.create(artist_id:2,
about: "This album is super real.",
album_name: "The Rockiest",
credits: "Walmart has the okay deals.",
description: "A rock album? Or an album for unstable roads? You decide.",
image_url: "Rock Picture",
price: 10,
release_date: "11/2/2016")
Album.create(artist_id:3,
album_name: "Mangekyou",
about: "20 Years in the Making. Jimmy Weckl finally releases a solo album to the masses!",
price: 40,
release_date:"11/5/16",
image_url: "Mangekyou Picture")
Album.create(artist_id:4,
about: "Nekomata Master drops yet another album filled with amazing soundscapes and intense chord progressions.",
album_name: "Crevice",
credits: "Konami Digital Entertainment",
description: "",
image_url: "Cat Picture",
price: 40,
release_date: "11/2/2016")



Track.create(album_id:1,
  release_date: Date.new,
  track_number:1,
  price: 1,
  track_name:"Blue Bossa",
  description: "If I could play this song well, it would be here",
  image_url: "http://www.rareelectricguitar.com/images/upload/Image/xieduesenberg-star-player-tv-pearl-emerald-blue-full-front.jpg",
  lyrics: "La la la this is the blue bossa song lyrics",
  credits: "Target again for best deals.",
  bonus: true
)
Track.create(album_id:1, release_date: Date.new, track_number:2, price: 1, track_name:"Jam in Key of Toast")
Track.create(album_id:1, release_date: Date.new, track_number:3, price: 1, track_name:"Night in Tunisia")

Track.create(album_id:2, release_date: Date.new, track_number:1, price: 1, track_name:"Run")
Track.create(album_id:2, release_date: Date.new, track_number:2, price: 1, track_name:"Something Smells")
Track.create(album_id:3, release_date: Date.new, track_number:1, price: 5, track_name:"Greatest Song")

Track.create(album_id:5, release_date: "11/5/16", price: 2, track_number: 1,track_name:"Mangekyou")
Track.create(album_id:5, release_date: "11/5/16", price: 2, track_number: 2,track_name:"Keiko My Love")
Track.create(album_id:5, release_date: "11/5/16", price: 2, track_number: 3,track_name:"Mirage Residence")
Track.create(album_id:5, release_date: "11/5/16", price: 2, track_number: 4,track_name:"TENGU")
Track.create(album_id:5, release_date: "11/5/16", price: 2, track_number: 5,track_name:"Waza")
Track.create(album_id:5, release_date: "11/5/16", price: 2, track_number: 6,track_name:"Centaur")
Track.create(album_id:5, release_date: "11/5/16", price: 2, track_number: 7,track_name:"Cockpit")
Track.create(album_id:5, release_date: "11/5/16", price: 2, track_number: 8,track_name:"Orbital Velocity")
Track.create(album_id:5, release_date: "11/5/16", price: 2, track_number: 9,track_name:"Jungle")
Track.create(album_id:5, release_date: "11/5/16", price: 2, track_number: 10,track_name:"Across The Nightmare")

# Create seed for Nekomata, Jimmy Weckl, Izumi, (Maybe :Living Daylights), My Stuff
# Hiromi, SOIL and PIMP, T-SQUARE,Kenji Suzuki
