# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username:"Guest", password:"123456")
User.create(username:"Andrew", password:"hunter2")

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
