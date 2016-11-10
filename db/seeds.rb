# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# 1
User.create(username:"Guest", password:"123456", artist_name: "Greatest Recruiter",
about:"This recruiter has the best music in the world!")

  Album.create(artist_id:1, image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/7d52009dcdc24917c64059eb16244e93_qxomuw.jpg",
  album_name:"Greatest Hits from the Greatest Recruiter", price: 30, release_date:Date.new)

    Track.create(album_id:3, release_date: Date.new, track_number:1, price: 5, track_name:"Greatest Song")
# 2
User.create(username:"Andrew", password:"hunter2", artist_name:"DJ Saitae",
about:"Local Guitarist Looking for Musical Love", location:"San Jose")

  Album.create(
    artist_id:2,
    album_name:"The Jazziest",
    price: 5,
    release_date:Date.new,
    description: "This is a jazz album.",
    image_url: "http://magazine.dv247.com/wp-content/uploads/2010/12/gretsch-g6136t-white-falcon.jpg",
    about: "This album isn't real yet.",
    credits: "Target for having the best deals.",
    )
    Track.create(album_id:1,
    release_date: Date.new,
    track_number:1,
    price: 1,
    track_name:"Blue Bossa",
    description: "If I could play this song well, it would be here",
    image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/blue-moon-tree_nzyd7w.jpg",
    lyrics: "La la la this is the blue bossa song lyrics",
    credits: "Target again for best deals.",
    bonus: true
    )
    Track.create(album_id:1, image_url:"http://res.cloudinary.com/dprtxlyhi/image/upload/download_ap2iwu.jpeg", release_date: Date.new, track_number:2, price: 1, track_name:"Jam in Key of Toast")
    Track.create(album_id:1, image_url:"http://res.cloudinary.com/dprtxlyhi/image/upload/21076_4158_zphrmy.jpg", release_date: Date.new, track_number:3, price: 1, track_name:"Night in Tunisia")

  Album.create(artist_id:2, image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/funk-graffiti-vector_23-2147497930_eyvd44.jpg",
  album_name:"The Funkiest", price: 10, release_date:Date.new)

  Album.create(artist_id:2,
  about: "This album is super real.",
  album_name: "The Rockiest",
  credits: "Walmart has the okay deals.",
  description: "A rock album? Or an album for unstable roads? You decide.",
  image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/key_holder_uhfpir.jpg",
  price: 10,
  release_date: "11/2/2016")
    Track.create(album_id:2, release_date: Date.new, track_number:1, price: 1, track_name:"Run")
    Track.create(album_id:2, release_date: Date.new, track_number:2, price: 1, track_name:"Something Smells")




# 3
User.create(username:"jWeckl", password:"573573", artist_name:"Jimmy Weckl",
about:"Underrated Jazz Musician from Japan. Ex-Konami In-house Artist.", location:"Tokyo")

  Album.create(artist_id:3,
  album_name: "Mangekyou",
  about: "20 Years in the Making. Jimmy Weckl finally releases a solo album to the masses!",
  price: 40,
  release_date:"11/5/16",
  image_url: "https://s3-us-west-1.amazonaws.com/major9/Mangekyou.png")
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
    # track_id 16
      TrackFile.create(user_id:3, track_id:6, url:"https://s3-us-west-1.amazonaws.com/major9/5-21+%E4%B8%87%E8%8F%AF%E9%8F%A1.mp3")
      TrackFile.create(user_id:3, track_id:7, url:"https://s3-us-west-1.amazonaws.com/major9/4-31+Keiko+my+love.mp3")
      TrackFile.create(user_id:3, track_id:8, url:"https://s3-us-west-1.amazonaws.com/major9/9-29+%E3%83%9F%E3%83%A9%E3%83%BC%E3%82%B7%E3%82%99%E3%83%A5%E3%83%BB%E3%83%AC%E3%82%B7%E3%82%99%E3%83%86%E3%82%99%E3%83%B3%E3%82%B9.mp3")
      TrackFile.create(user_id:3, track_id:9, url:"https://s3-us-west-1.amazonaws.com/major9/11-28 TENGU.mp3")
      TrackFile.create(user_id:3, track_id:10, url:"https://s3-us-west-1.amazonaws.com/major9/1-26 Waza.mp3")
      TrackFile.create(user_id:3, track_id:11, url:"https://s3-us-west-1.amazonaws.com/major9/2-15 CENTAUR.mp3")
      TrackFile.create(user_id:3, track_id:12, url:"https://s3-us-west-1.amazonaws.com/major9/5-43 cockpit.mp3")
      TrackFile.create(user_id:3, track_id:13, url:"https://s3-us-west-1.amazonaws.com/major9/6-18 Orbital Velocity.mp3")
      TrackFile.create(user_id:3, track_id:14, url:"https://s3-us-west-1.amazonaws.com/major9/12-34 Jungle.mp3")
      TrackFile.create(user_id:3, track_id:15, url:"https://s3-us-west-1.amazonaws.com/major9/1-20 Across the nightmare.mp3")

User.create(username:"neko", password:"573573", artist_name:"Nekomata Master",
about:"Best musician in Konami. Loves cats.", location: "Tokyo")

  Album.create(artist_id:4,
  about: "Nekomata Master drops yet another album filled with amazing soundscapes and intense chord progressions.",
  album_name: "Crevice",
  credits: "Konami Digital Entertainment",
  description: "",
  image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/GFCA-340_v1fedo.jpg",
  price: 40,
  release_date: "11/2/2016")
# 5
User.create(username:"soil", password:"hunter2", artist_name:"Soil & \"Pimp\" Sessions",
about:" Soil & \"Pimp\" Sessions is an energetic Japanese club jazz band that have started to receive international recognition. The band consists of six members: Shacho (\"agitator\"), Tabu Zombie (trumpet), Motoharu (sax), Josei (keyboards), Akita Goldman (double bass) and Midorin (drums).
", location: "Tokyo")

  Album.create(artist_id: 5, album_name: "Summer Goddess", price:"10", release_date:"2005.07.21",
  image_url:"http://res.cloudinary.com/dprtxlyhi/image/upload/Summer_Goddess_EP_wqm8yl.jpg")
    Track.create(album_id: 7, release_date: "2005.07.21", price: 1, track_number:1, track_name: "follow")
    Track.create(album_id: 7, release_date: "2005.07.21", price: 1, track_number:2, track_name: "fragment")
    Track.create(album_id: 7, release_date: "2005.07.21", price: 1, track_number:3, track_name: "summer goddess")
    Track.create(album_id: 7, release_date: "2005.07.21", price: 1, track_number:4, track_name: "ms.b.c")
    Track.create(album_id: 7, release_date: "2005.07.21", price: 1, track_number:5, track_name: "sweat")

      TrackFile.create(user_id: 5, track_id:16, url: "https://s3-us-west-1.amazonaws.com/major9/(2005.07.21)+Summer+Goddess+%5B320%5D/01+-+follow.mp3")
      TrackFile.create(user_id: 5, track_id:17, url: "https://s3-us-west-1.amazonaws.com/major9/(2005.07.21)+Summer+Goddess+%5B320%5D/02+-+fragment.mp3")
      TrackFile.create(user_id: 5, track_id:18, url: "https://s3-us-west-1.amazonaws.com/major9/(2005.07.21)+Summer+Goddess+%5B320%5D/03+-+summer goddess.mp3")
      TrackFile.create(user_id: 5, track_id:19, url: "https://s3-us-west-1.amazonaws.com/major9/(2005.07.21)+Summer+Goddess+%5B320%5D/04+-+ms.b.c.mp3")
      TrackFile.create(user_id: 5, track_id:20, url: "https://s3-us-west-1.amazonaws.com/major9/(2005.07.21)+Summer+Goddess+%5B320%5D/05+-+sweat.mp3")


  Album.create(artist_id: 5, album_name: "Pimpoint", price: "20", release_date:"2007.03.07",
  image_url:"http://res.cloudinary.com/dprtxlyhi/image/upload/Pimpoint_mtk04r.jpg")
    Track.create(album_id:8, release_date:"2007.03.07", price: 1, track_number: 1, track_name: "Dawn")
    Track.create(album_id:8, release_date:"2007.03.07", price: 1, track_number: 2, track_name: "A.I.E")
    Track.create(album_id:8, release_date:"2007.03.07", price: 1, track_number: 3, track_name: "Makuroke")
    Track.create(album_id:8, release_date:"2007.03.07", price: 1, track_number: 4, track_name: "Mashiroke")
    Track.create(album_id:8, release_date:"2007.03.07", price: 1, track_number: 5, track_name: "We Want More!!!!!")
    Track.create(album_id:8, release_date:"2007.03.07", price: 1, track_number: 6, track_name: "Zambezi")
    Track.create(album_id:8, release_date:"2007.03.07", price: 1, track_number: 7, track_name: "Red Clay")
    Track.create(album_id:8, release_date:"2007.03.07", price: 1, track_number: 8, track_name: "Hype Of Gold")
    Track.create(album_id:8, release_date:"2007.03.07", price: 1, track_number: 9, track_name: "Pluto")
    Track.create(album_id:8, release_date:"2007.03.07", price: 1, track_number: 10, track_name: "The Party")
    Track.create(album_id:8, release_date:"2007.03.07", price: 1, track_number: 11, track_name: "Funky Goldman")
    Track.create(album_id:8, release_date:"2007.03.07", price: 1, track_number: 12, track_name: "The Slaughter Suite")
    Track.create(album_id:8, release_date:"2007.03.07", price: 1, track_number: 13, track_name: "Scales")
    Track.create(album_id:8, release_date:"2007.03.07", price: 1, track_number: 14, track_name: "Sahara")


# 6
User.create(username:"hiromi", password:"hunter2", artist_name:"Hiromi Uehara",
about: "Hiromi Uehara (上原ひろみ), born 26 March 1979, is a jazz composer and pianist born in Hamamatsu, Japan. She is known for her virtuosic technique, energetic live performances and blend of musical genres such as jazz, progressive rock, classical and fusion in her compositions.
", location: "Tokyo")
# 7
User.create(username:"tsquare", password:"hunter2", artist_name:"T-SQUARE",
about: "T-SQUARE is a Japanese jazz fusion band that was formed in 1978 as THE SQUARE (which was changed into T-SQUARE in 1988). Its most successful lineup included guitarist Masahiro Andoh, bassist Mitsuru Sutoh, saxophonist, flutist and EWI player Takeshi Itoh, keyboardist Hirotaka Izumi, and drummer Hiroyuki Noritake.
", location: "Tokyo")
# 8
User.create(username:"pianojac", password:"hunter2", artist_name:"Pia-no-jaC",
about: "HAYATO (piano) and HIRO (cajon) formed →Pia-no-jaC← in April 2005, and they specialize in instrumental music just as the duo's name suggests. The name is a combination of \"piano\" and \"cajon\", with the latter spelt backwards from the right.
", location: "Tokyo")
# 9
User.create(username:"tokyojihen", password:"hunter2",artist_name:"Tokyo Jihen",
about: "Tokyo Jihen or Tokyo Incidents (東京事変 Tōkyō Jihen) was a Japanese band created by Shiina Ringo. The band was originally comprised of the backing members of her Sugoroku Ecstasy Tour. The band's debut single, \"Gunjo Biyori\", was released in September 2004.
", location:"Tokyo")
# 10
User.create(username:"foxcaptureplan", password:'hunter2',artist_name:"fox capture plan",
about: "Piano: Ryo Kishimoto(JABBERLOOP)
Double Bass : Hidehiro Kawai(Immigrant's Bossa Band)
Drums: Tsukasa Inoue(direction of the chord, nhhmbase)
", location:"Tokyo")
# 11
User.create(username:"jabberloop", password:'hunter2',artist_name:"JABBERLOOP",
about: "JABBERLOOP is a Japanese club jazz band composed of five members (Sax, Trumpet, Keyboard, Bass and Drums). The band was formed in 2004 and they have performed at various private and public venues.
")






# Create seed for Nekomata, Jimmy Weckl, Izumi, (Maybe :Living Daylights), My Stuff
# Hiromi, SOIL and PIMP, T-SQUARE,Kenji Suzuki
# Album.create(artist_id: , album_name: "", about:"", price: , release_date:"", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/")
# Track.create(album_id: , release_date: "", price: 1, track_number: , track_name: "")
# TrackFile.create(user_id: , track_id: , url:" ")
#
# Album.create(artist_id: , album_name: "", about:"", price: , release_date:"", image_url: "")
# Track.create(album_id: , release_date: "", price: 1, track_number: , track_name: "")
# TrackFile.create(user_id: , track_id: , url:" ")


# ./(2007.03.07) Pimpoint/01 - Dawn.mp3
# ./(2007.03.07) Pimpoint/02 - A.I.E.mp3
# ./(2007.03.07) Pimpoint/03 - Makuroke.mp3
# ./(2007.03.07) Pimpoint/04 - Mashiroke.mp3
# ./(2007.03.07) Pimpoint/05 - We Want More!!!!!.mp3
# ./(2007.03.07) Pimpoint/06 - Zambezi.mp3
# ./(2007.03.07) Pimpoint/07 - Red Clay.mp3
# ./(2007.03.07) Pimpoint/08 - Hype Of Gold.mp3
# ./(2007.03.07) Pimpoint/09 - Pluto.mp3
# ./(2007.03.07) Pimpoint/10 - The Party.mp3
# ./(2007.03.07) Pimpoint/11 - Funky Goldman.mp3
# ./(2007.03.07) Pimpoint/12 - The Slaughter Suite.mp3
# ./(2007.03.07) Pimpoint/13 - Scales.mp3
# ./(2007.03.07) Pimpoint/14 - Sahara.mp3
# ./Pimpoint.jpg

Album.create(artist_id:5 , album_name: "Circles", about:"", price: 15, release_date:"11.11.2015", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/Circles_hfzcwr.jpg
")
Track.create(album_id: 9, release_date:"11.11.2015", price:1, track_number:1, track_name:"ジャズィ・カンヴァセイション")
Track.create(album_id: 9, release_date:"11.11.2015", price:1, track_number:2, track_name:"殺し屋危機一髪")
Track.create(album_id: 9, release_date:"11.11.2015", price:1, track_number:3, track_name:"Summer Love")
Track.create(album_id: 9, release_date:"11.11.2015", price:1, track_number:4, track_name:"Bon Bon Villa")
Track.create(album_id: 9, release_date:"11.11.2015", price:1, track_number:5, track_name:"Light Blue Soldier")
Track.create(album_id: 9, release_date:"11.11.2015", price:1, track_number:6, track_name:"Iceburn")
Track.create(album_id: 9, release_date:"11.11.2015", price:1, track_number:7, track_name:"Ananta")
Track.create(album_id: 9, release_date:"11.11.2015", price:1, track_number:8, track_name:"記憶の旅")
Track.create(album_id: 9, release_date:"11.11.2015", price:1, track_number:9, track_name:"Frog in the World!")
Track.create(album_id: 9, release_date:"11.11.2015", price:1, track_number:10, track_name:"Hey Tagger, I’m Here")
Track.create(album_id: 9, release_date:"11.11.2015", price:1, track_number:11, track_name:"殺し屋危機一髪 (DEATH JAZZ ver.)")
# ./Circles.jpg

# ./CIRCLES (Limited Edition)/01. ジャズィ・カンヴァセイション.mp3
# ./CIRCLES (Limited Edition)/02. 殺し屋危機一髪.mp3
# ./CIRCLES (Limited Edition)/03. Summer Love.mp3
# ./CIRCLES (Limited Edition)/04. Bon Bon Villa.mp3
# ./CIRCLES (Limited Edition)/05. Light Blue Soldier.mp3
# ./CIRCLES (Limited Edition)/06. Iceburn.mp3
# ./CIRCLES (Limited Edition)/07. Ananta.mp3
# ./CIRCLES (Limited Edition)/08. 記憶の旅.mp3
# ./CIRCLES (Limited Edition)/09. Frog in the World!.mp3
# ./CIRCLES (Limited Edition)/10. Hey Tagger, I’m Here.mp3
# ./CIRCLES (Limited Edition)/11. 殺し屋危機一髪 (DEATH JAZZ ver.).mp3
# ./Circles.jpg
Album.create(artist_id:6 , album_name: "Another Mind", about:"", price: 9, release_date:"11.11.2005", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/Another_Mind_Idemad.jpg")
Track.create(album_id:10, release_date:"11.11.2005", price: 1, track_number:1, track_name: "XYZ")
Track.create(album_id:10, release_date:"11.11.2005", price: 1, track_number:2, track_name: "Double Personality")
Track.create(album_id:10, release_date:"11.11.2005", price: 1, track_number:3, track_name: "Summer Rain")
Track.create(album_id:10, release_date:"11.11.2005", price: 1, track_number:4, track_name: "Joy")
Track.create(album_id:10, release_date:"11.11.2005", price: 1, track_number:5, track_name: "010101")
Track.create(album_id:10, release_date:"11.11.2005", price: 1, track_number:6, track_name: "Truth and Lies")
Track.create(album_id:10, release_date:"11.11.2005", price: 1, track_number:7, track_name: "Dancando No Pariso")
Track.create(album_id:10, release_date:"11.11.2005", price: 1, track_number:8, track_name: "Another Mind")
Track.create(album_id:10, release_date:"11.11.2005", price: 1, track_number:9, track_name: "The Tom and Jerry Show [bonus track]")
# ./Another Mind.jpg
#
# ./2003 - Another Mind/01. XYZ.mp3
# ./2003 - Another Mind/02. Double Personality.mp3
# ./2003 - Another Mind/03. Summer Rain.mp3
# ./2003 - Another Mind/04. Joy.mp3
# ./2003 - Another Mind/05. 010101.mp3
# ./2003 - Another Mind/06. Truth and Lies.mp3
# ./2003 - Another Mind/07. Dancando No Pariso.mp3
# ./2003 - Another Mind/08. Another Mind.mp3
# ./2003 - Another Mind/09. The Tom and Jerry Show [bonus track].mp3
# ./Another Mind.jpg

Album.create(artist_id:6 , album_name: "Alive", about:"", price: 12 , release_date:"11.11.2014", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/Alive_jbbzev.jpg")
Track.create(album_id: 11, release_date: "11.11.2004", price: 1, track_number:1, track_name: "Alive")
Track.create(album_id: 11, release_date: "11.11.2004", price: 1, track_number:2, track_name: "Back")
Track.create(album_id: 11, release_date: "11.11.2004", price: 1, track_number:3, track_name: "Dreamer")
Track.create(album_id: 11, release_date: "11.11.2004", price: 1, track_number:4, track_name: "Firefly")
Track.create(album_id: 11, release_date: "11.11.2004", price: 1, track_number:5, track_name: "Life Goes On")
Track.create(album_id: 11, release_date: "11.11.2004", price: 1, track_number:6, track_name: "Player")
Track.create(album_id: 11, release_date: "11.11.2004", price: 1, track_number:7, track_name: "Seeker")
Track.create(album_id: 11, release_date: "11.11.2004", price: 1, track_number:8, track_name: "Spirit")
Track.create(album_id: 11, release_date: "11.11.2004", price: 1, track_number:9, track_name: "Wanderer")
Track.create(album_id: 11, release_date: "11.11.2004", price: 1, track_number:10, track_name: "Warrior")
# ./Alive.jpg

Album.create(artist_id:6 , album_name: "Spark", about:"", price: 10 , release_date:"11.11.2016", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/Spark_lgvzkh.jpg")
Track.create(album_id:12, release_date: "11.11.2016", price:1, track_number:1, track_name: "Spark")
Track.create(album_id:12, release_date: "11.11.2016", price:1, track_number:2, track_name: "In A Trance")
Track.create(album_id:12, release_date: "11.11.2016", price:1, track_number:3, track_name: "Take Me Away")
Track.create(album_id:12, release_date: "11.11.2016", price:1, track_number:4, track_name: "Wonder Land")
Track.create(album_id:12, release_date: "11.11.2016", price:1, track_number:5, track_name: "Indulgence")
Track.create(album_id:12, release_date: "11.11.2016", price:1, track_number:6, track_name: "Dilemma")
Track.create(album_id:12, release_date: "11.11.2016", price:1, track_number:7, track_name: "What Will Be, Will Be")
Track.create(album_id:12, release_date: "11.11.2016", price:1, track_number:8, track_name: "Wake Up And Dream")
Track.create(album_id:12, release_date: "11.11.2016", price:1, track_number:9, track_name: "Alls Well")
TrackFile.create(user_id:6 , track_id:65 , url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi+Uehara+(%E4%B8%8A%E5%8E%9F%E3%81%B2%E3%82%8D%E3%81%BF)+-+Spark+%5BV0%5D/01+-+Spark.mp3")
TrackFile.create(user_id:6 , track_id:66 , url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi+Uehara+(%E4%B8%8A%E5%8E%9F%E3%81%B2%E3%82%8D%E3%81%BF)+-+Spark+%5BV0%5D/02+-+In+A+Trance.mp3 ")
TrackFile.create(user_id:6 , track_id:67 , url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi+Uehara+(%E4%B8%8A%E5%8E%9F%E3%81%B2%E3%82%8D%E3%81%BF)+-+Spark+%5BV0%5D/03+-+Take+Me+Away.mp3 ")
TrackFile.create(user_id:6 , track_id:68 , url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi+Uehara+(%E4%B8%8A%E5%8E%9F%E3%81%B2%E3%82%8D%E3%81%BF)+-+Spark+%5BV0%5D/04+-+Wonder+Land.mp3 ")
TrackFile.create(user_id:6 , track_id:69 , url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi+Uehara+(%E4%B8%8A%E5%8E%9F%E3%81%B2%E3%82%8D%E3%81%BF)+-+Spark+%5BV0%5D/05+-+Indulgence.mp3 ")
TrackFile.create(user_id:6 , track_id:70 , url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi+Uehara+(%E4%B8%8A%E5%8E%9F%E3%81%B2%E3%82%8D%E3%81%BF)+-+Spark+%5BV0%5D/06+-+Dilemma.mp3 ")
TrackFile.create(user_id:6 , track_id:71 , url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi+Uehara+(%E4%B8%8A%E5%8E%9F%E3%81%B2%E3%82%8D%E3%81%BF)+-+Spark+%5BV0%5D/07+-+What+Will+Be%2C+Will+Be.mp3")
TrackFile.create(user_id:6 , track_id:72 , url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi+Uehara+(%E4%B8%8A%E5%8E%9F%E3%81%B2%E3%82%8D%E3%81%BF)+-+Spark+%5BV0%5D/08+-+Wake+Up+And+Dream.mp3 ")
TrackFile.create(user_id:6 , track_id:73 , url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi+Uehara+(%E4%B8%8A%E5%8E%9F%E3%81%B2%E3%82%8D%E3%81%BF)+-+Spark+%5BV0%5D/09+-+All%27s+Well.mp3")
# ./Hiromi Uehara (上原ひろみ) - Spark [V0]/Spark Cover.jpg
# ./Spark.jpg

Album.create(artist_id:7 , album_name: "Treasure Hunter", about:"", price: 15, release_date:"2016.04.27", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/treasure_hunter_x4qijh.jpg")
Track.create(album_id:13, release_date:"2016.04.27", price:1.50, track_number:1, track_name:"Treasure Hunter")
Track.create(album_id:13, release_date:"2016.04.27", price:1.50, track_number:2, track_name:"Chops!!")
Track.create(album_id:13, release_date:"2016.04.27", price:1.50, track_number:3, track_name:"Metro 7")
Track.create(album_id:13, release_date:"2016.04.27", price:1.50, track_number:4, track_name:"Night Light")
Track.create(album_id:13, release_date:"2016.04.27", price:1.50, track_number:5, track_name:"7-6-5")
Track.create(album_id:13, release_date:"2016.04.27", price:1.50, track_number:6, track_name:"Pearl of the Adriatic")
Track.create(album_id:13, release_date:"2016.04.27", price:1.50, track_number:7, track_name:"Double Rainbow")
Track.create(album_id:13, release_date:"2016.04.27", price:1.50, track_number:8, track_name:"Scissors Paper Rock")
Track.create(album_id:13, release_date:"2016.04.27", price:1.50, track_number:9, track_name:"Last Scene")

Album.create(artist_id:7 , album_name: "Truth", about:"", price: 5, release_date:"11.11.11.11.1987", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/truth_qvnmxxp.jpg")
Track.create(album_id:14, release_date:"11.11.1987", price: 0.50, track_number:1, track_name:"Grand Prix")
Track.create(album_id:14, release_date:"11.11.1987", price: 0.50, track_number:2, track_name:"Celebration")
Track.create(album_id:14, release_date:"11.11.1987", price: 0.50, track_number:3, track_name:"Beat in Beat")
Track.create(album_id:14, release_date:"11.11.1987", price: 0.50, track_number:4, track_name:"Unexpected Lover")
Track.create(album_id:14, release_date:"11.11.1987", price: 0.50, track_number:5, track_name:"Truth")
Track.create(album_id:14, release_date:"11.11.1987", price: 0.50, track_number:6, track_name:"Breeze and You")
Track.create(album_id:14, release_date:"11.11.1987", price: 0.50, track_number:7, track_name:"Giant Side Steps")
Track.create(album_id:14, release_date:"11.11.1987", price: 0.50, track_number:8, track_name:"Because")
Track.create(album_id:14, release_date:"11.11.1987", price: 0.50, track_number:9, track_name:"Twilight in Upper West")

Album.create(artist_id:7 , album_name: "T-Square Plays The Square", about:"", price: 10 , release_date:"11.11.1995", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/takara_kyoku_fvq2ef.jpg")
Track.create(album_id:15, release_date:"11.11.1995", price: 1, track_number:1, track_name:"Omens Of Love")
Track.create(album_id:15, release_date:"11.11.1995", price: 1, track_number:2, track_name:"宝島")
Track.create(album_id:15, release_date:"11.11.1995", price: 1, track_number:3, track_name:"Hawaiiへ行きたい")
Track.create(album_id:15, release_date:"11.11.1995", price: 1, track_number:4, track_name:"Little Pop Sugar")
Track.create(album_id:15, release_date:"11.11.1995", price: 1, track_number:5, track_name:"Tomorrow's Affair")
Track.create(album_id:15, release_date:"11.11.1995", price: 1, track_number:6, track_name:"Midnight Lover")
Track.create(album_id:15, release_date:"11.11.1995", price: 1, track_number:7, track_name:"All About You")
Track.create(album_id:15, release_date:"11.11.1995", price: 1, track_number:8, track_name:"Truth")
Track.create(album_id:15, release_date:"11.11.1995", price: 1, track_number:9, track_name:"脚線美の誘惑")
Track.create(album_id:15, release_date:"11.11.1995", price: 1, track_number:10, track_name:"Dans Sa Chambre")
Track.create(album_id:15, release_date:"11.11.1995", price: 1, track_number:11, track_name:"It's Magic")
Track.create(album_id:15, release_date:"11.11.1995", price: 1, track_number:12, track_name:"Forgotten Saga")

Album.create(artist_id:8 , album_name: "BLOOD", about:"", price: 10, release_date:"11.11.2005", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/BLOOD_pjnv2n.jpg")
Track.create(album_id: 16, release_date:"11.11.2005", price: 2, track_number:1, track_name:"TASOGARE")
Track.create(album_id: 16, release_date:"11.11.2005", price: 2, track_number:2, track_name:"Tears")
Track.create(album_id: 16, release_date:"11.11.2005", price: 2, track_number:3, track_name:"Nostalgia")
Track.create(album_id: 16, release_date:"11.11.2005", price: 2, track_number:4, track_name:"Binary Star")
Track.create(album_id: 16, release_date:"11.11.2005", price: 2, track_number:5, track_name:"BLUE BLOOD BOOGIE")
Track.create(album_id: 16, release_date:"11.11.2005", price: 2, track_number:6, track_name:"FILMS")
Track.create(album_id: 16, release_date:"11.11.2005", price: 2, track_number:7, track_name:"Sicilia di mare aperto")


Album.create(artist_id:8 , album_name: "EAT A CLASSIC 4", about:"", price: 8 , release_date:"11.11.2012", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/EAT_A_CLASSIC_4_ecq6dp.jpg")
Track.create(album_id:17, release_date:"11.11.2012", price: 2, track_number:1, track_name:"Night on Bald Mountain")
Track.create(album_id:17, release_date:"11.11.2012", price: 2, track_number:2, track_name:"The Planets Jupiter, the Bringer of Jollity")
Track.create(album_id:17, release_date:"11.11.2012", price: 2, track_number:3, track_name:"Hungarian Dance No.5")
Track.create(album_id:17, release_date:"11.11.2012", price: 2, track_number:4, track_name:"Deux Arabesques Andantino con moto")
Track.create(album_id:17, release_date:"11.11.2012", price: 2, track_number:5, track_name:"Fur Elise")
Track.create(album_id:17, release_date:"11.11.2012", price: 2, track_number:6, track_name:"Gymnopedies No.1")
# ./EAT A CLASSIC 4.jpg

Album.create(artist_id:8 , album_name: "Re-EARTH", about:"", price: 10, release_date:"11.11.2013", image_url: "")
Track.create(album_id:18, release_date: "11.11.2013", price: 2, track_number:1, track_name: "METROPOLIS")
Track.create(album_id:18, release_date: "11.11.2013", price: 2, track_number:2, track_name: "Savanna")
Track.create(album_id:18, release_date: "11.11.2013", price: 2, track_number:3, track_name: "Flor do Sol")
Track.create(album_id:18, release_date: "11.11.2013", price: 2, track_number:4, track_name: "Triad")
Track.create(album_id:18, release_date: "11.11.2013", price: 2, track_number:5, track_name: "''Destruction'' a moll Op. 1, No.38")
Track.create(album_id:18, release_date: "11.11.2013", price: 2, track_number:6, track_name: "風雅")
Track.create(album_id:18, release_date: "11.11.2013", price: 2, track_number:7, track_name: "Evergreen")

Album.create(artist_id:9 , album_name: "大発見", about:"", price: 10 , release_date:"11.11.2014", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/daihakken_plyqo7.jpg")
Track.create(album_id:19, release_date: "11.11.2014", price: 1, track_number:1, track_name: "天国へようこそ")
Track.create(album_id:19, release_date: "11.11.2014", price: 1, track_number:2, track_name: "絶対値対相対値")
Track.create(album_id:19, release_date: "11.11.2014", price: 1, track_number:3, track_name: "新しい文明開化")
Track.create(album_id:19, release_date: "11.11.2014", price: 1, track_number:4, track_name: "電気のない都市")
Track.create(album_id:19, release_date: "11.11.2014", price: 1, track_number:5, track_name: "海底に巣くう男")
Track.create(album_id:19, release_date: "11.11.2014", price: 1, track_number:6, track_name: "禁じられた遊び")
Track.create(album_id:19, release_date: "11.11.2014", price: 1, track_number:7, track_name: "ドーパミント!")
Track.create(album_id:19, release_date: "11.11.2014", price: 1, track_number:8, track_name: "恐るべき大人達")
Track.create(album_id:19, release_date: "11.11.2014", price: 1, track_number:9, track_name: "21世紀宇宙の子")
Track.create(album_id:19, release_date: "11.11.2014", price: 1, track_number:10, track_name: "かつては男と女")
Track.create(album_id:19, release_date: "11.11.2014", price: 1, track_number:11, track_name: "空が鳴っている")
Track.create(album_id:19, release_date: "11.11.2014", price: 1, track_number:12, track_name: "風に肖って行け")
Track.create(album_id:19, release_date: "11.11.2014", price: 1, track_number:13, track_name: "女の子は誰でも")
Track.create(album_id:19, release_date: "11.11.2014", price: 1, track_number:14, track_name: "天国へようこそ")

Album.create(artist_id:9 , album_name: "Kyouiku", about:"", price: 10, release_date:"11.11.2004", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/kyoiku_rcujtp.jpg")
Track.create(album_id:20, release_date: "11.11.2004", price: 1, track_number:1, track_name: "Ringo no Uta")
Track.create(album_id:20, release_date: "11.11.2004", price: 1, track_number:2, track_name: "Gunjou Biyori")
Track.create(album_id:20, release_date: "11.11.2004", price: 1, track_number:3, track_name: "Nyuusui Negai")
Track.create(album_id:20, release_date: "11.11.2004", price: 1, track_number:4, track_name: "Sounan")
Track.create(album_id:20, release_date: "11.11.2004", price: 1, track_number:5, track_name: "Crawl")
Track.create(album_id:20, release_date: "11.11.2004", price: 1, track_number:6, track_name: "Genjitsu ni Oite")
Track.create(album_id:20, release_date: "11.11.2004", price: 1, track_number:7, track_name: "Genjitsu wo Warau")
Track.create(album_id:20, release_date: "11.11.2004", price: 1, track_number:8, track_name: "Service")
Track.create(album_id:20, release_date: "11.11.2004", price: 1, track_number:9, track_name: "Ekimae")
Track.create(album_id:20, release_date: "11.11.2004", price: 1, track_number:10, track_name: "Omatsuri Sawagi")
Track.create(album_id:20, release_date: "11.11.2004", price: 1, track_number:11, track_name: "Bokoku Joucho")
Track.create(album_id:20, release_date: "11.11.2004", price: 1, track_number:12, track_name: "Yume no Ato")

Album.create(artist_id:9 , album_name: "Adult", about:"", price: 15 , release_date:"11.11.2006", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/adult_fl4e07.jpg")
Track.create(album_id:21, release_date: "11.11.2006", price: 2, track_number:1, track_name: "Himitsu")
Track.create(album_id:21, release_date: "11.11.2006", price: 2, track_number:2, track_name: "Kenka Joutou")
Track.create(album_id:21, release_date: "11.11.2006", price: 2, track_number:3, track_name: "Keshou Naoshi")
Track.create(album_id:21, release_date: "11.11.2006", price: 2, track_number:4, track_name: "Superstar")
Track.create(album_id:21, release_date: "11.11.2006", price: 2, track_number:5, track_name: "Shuraba adult ver.")
Track.create(album_id:21, release_date: "11.11.2006", price: 2, track_number:6, track_name: "Yukiguni")
Track.create(album_id:21, release_date: "11.11.2006", price: 2, track_number:7, track_name: "Kabuki")
Track.create(album_id:21, release_date: "11.11.2006", price: 2, track_number:8, track_name: "Blackout")
Track.create(album_id:21, release_date: "11.11.2006", price: 2, track_number:9, track_name: "Tasogare Naki")
Track.create(album_id:21, release_date: "11.11.2006", price: 2, track_number:10, track_name: "Toumei Ningen")
Track.create(album_id:21, release_date: "11.11.2006", price: 2, track_number:11, track_name: "Tegami")

Album.create(artist_id:10 , album_name: "WALL", about:"", price: 10 , release_date:"2014.07.09", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/WALL_ktwm8t.jpg")
Track.create(album_id:22, release_date:"2014.07.09", price: 1, track_number:1, track_name: "Into the Wall")
Track.create(album_id:22, release_date:"2014.07.09", price: 1, track_number:2, track_name: "Shissou Suru Senkou")
Track.create(album_id:22, release_date:"2014.07.09", price: 1, track_number:3, track_name: "Elementary Stream")
Track.create(album_id:22, release_date:"2014.07.09", price: 1, track_number:4, track_name: "Paranoid Android")
Track.create(album_id:22, release_date:"2014.07.09", price: 1, track_number:5, track_name: "Helios")
Track.create(album_id:22, release_date:"2014.07.09", price: 1, track_number:6, track_name: "Unsolved")
Track.create(album_id:22, release_date:"2014.07.09", price: 1, track_number:7, track_name: "Tong Poo")
Track.create(album_id:22, release_date:"2014.07.09", price: 1, track_number:8, track_name: "A,S,A")
Track.create(album_id:22, release_date:"2014.07.09", price: 1, track_number:9, track_name: "This Wall")
Track.create(album_id:22, release_date:"2014.07.09", price: 1, track_number:10, track_name: "The Beginning of the Myth, Ep.II")


Album.create(artist_id:10 , album_name: "butterfly", about:"", price: 12 , release_date:"2015.11.04", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/Butterfly_cj58of.jpg")
Track.create(album_id:23, release_date:"2015.11.04", price: 2, track_number:1, track_name:"The Beginning Of")
Track.create(album_id:23, release_date:"2015.11.04", price: 2, track_number:2, track_name:"The Last Story of the Myth")
Track.create(album_id:23, release_date:"2015.11.04", price: 2, track_number:3, track_name:"Butterfly Effect")
Track.create(album_id:23, release_date:"2015.11.04", price: 2, track_number:4, track_name:"Konton to Souzou No Kikagaku")
Track.create(album_id:23, release_date:"2015.11.04", price: 2, track_number:5, track_name:"With Wind")
Track.create(album_id:23, release_date:"2015.11.04", price: 2, track_number:6, track_name:"Inchoate")
Track.create(album_id:23, release_date:"2015.11.04", price: 2, track_number:7, track_name:"Plug in Baby")
Track.create(album_id:23, release_date:"2015.11.04", price: 2, track_number:8, track_name:"Kaleidoscope")
Track.create(album_id:23, release_date:"2015.11.04", price: 2, track_number:9, track_name:"In the Darkness")
Track.create(album_id:23, release_date:"2015.11.04", price: 2, track_number:10, track_name:"Christmas Comes to Our Place")
Track.create(album_id:23, release_date:"2015.11.04", price: 2, track_number:11, track_name:"Supersonic")

Album.create(artist_id:10 , album_name: "Trinity", about:"", price: 10 , release_date:"11.11.2014", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/trinity_kwwfoq.jpg")
Track.create(album_id:24, release_date:"11.11.2014", price: 1, track_number:1, track_name: "polynity")
Track.create(album_id:24, release_date:"11.11.2014", price: 1, track_number:2, track_name: "shoudou no ryuushi")
Track.create(album_id:24, release_date:"11.11.2014", price: 1, track_number:3, track_name: "reincarnation")
Track.create(album_id:24, release_date:"11.11.2014", price: 1, track_number:4, track_name: "exceed the limit")
Track.create(album_id:24, release_date:"11.11.2014", price: 1, track_number:5, track_name: "trinity")
Track.create(album_id:24, release_date:"11.11.2014", price: 1, track_number:6, track_name: "white ambience")
Track.create(album_id:24, release_date:"11.11.2014", price: 1, track_number:7, track_name: "dark matter")
Track.create(album_id:24, release_date:"11.11.2014", price: 1, track_number:8, track_name: "wonderwall")
Track.create(album_id:24, release_date:"11.11.2014", price: 1, track_number:9, track_name: "good night")
Track.create(album_id:24, release_date:"11.11.2014", price: 1, track_number:10, track_name: "the begining of the myth")

Album.create(artist_id:11 , album_name: "OOPARTS", about:"", price: 10, release_date:"2009.08.05", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/OOParts_pdvapq.jpg")

Track.create(album_id:25, release_date:"2009.08.05", price: 2, track_number:1, track_name: "AREA51")
Track.create(album_id:25, release_date:"2009.08.05", price: 2, track_number:2, track_name: "CRYSTAL SKULL")
Track.create(album_id:25, release_date:"2009.08.05", price: 2, track_number:3, track_name: "シアワセノコモレビ")
Track.create(album_id:25, release_date:"2009.08.05", price: 2, track_number:4, track_name: "バミューダ・トライアングル")
Track.create(album_id:25, release_date:"2009.08.05", price: 2, track_number:5, track_name: "黄金ジェット")
Track.create(album_id:25, release_date:"2009.08.05", price: 2, track_number:6, track_name: "Fish in the sky")
Track.create(album_id:25, release_date:"2009.08.05", price: 2, track_number:7, track_name: "Fiesta")
Track.create(album_id:25, release_date:"2009.08.05", price: 2, track_number:8, track_name: "Behind the wind(DJ HEAVYGRINDER Remix)")


Album.create(artist_id:11 , album_name: "Seme Moeru", about:"", price: 20 , release_date:"2010.10.02", image_url: "http://res.cloudinary.com/dprtxlyhi/image/upload/Seme_Moeru_l8zvdy.jpg")
Track.create(album_id:26, release_date:"2010.10.02", price: 2, track_number:1, track_name: "Round Mirror Moon feat. Yoshika (from SOULHEAD)")
Track.create(album_id:26, release_date:"2010.10.02", price: 2, track_number:2, track_name: "Red")
Track.create(album_id:26, release_date:"2010.10.02", price: 2, track_number:3, track_name: "ソレソレ")
Track.create(album_id:26, release_date:"2010.10.02", price: 2, track_number:4, track_name: "Hot Guys")
Track.create(album_id:26, release_date:"2010.10.02", price: 2, track_number:5, track_name: "Natural High feat. Tsugumi (from SOULHEAD)")
Track.create(album_id:26, release_date:"2010.10.02", price: 2, track_number:6, track_name: "センキュー!")
Track.create(album_id:26, release_date:"2010.10.02", price: 2, track_number:7, track_name: "Shake Bossa Groovy")
Track.create(album_id:26, release_date:"2010.10.02", price: 2, track_number:8, track_name: "本日モ晴天ナリ")
Track.create(album_id:26, release_date:"2010.10.02", price: 2, track_number:9, track_name: "森people")
Track.create(album_id:26, release_date:"2010.10.02", price: 2, track_number:10, track_name: "SASURAI")
Track.create(album_id:26, release_date:"2010.10.02", price: 2, track_number:11, track_name: "攻め燃える")
Track.create(album_id:26, release_date:"2010.10.02", price: 2, track_number:12, track_name: "シロクマ ／ JABBERLOOP吹奏楽団")
Track.create(album_id:26, release_date:"2010.10.02", price: 2, track_number:13, track_name: "荘厳伝説 ／ JABBERLOOP吹奏楽団")

TrackFile.create( user_id:5, track_id:21, url:"https://s3-us-west-1.amazonaws.com/major9/(2007.03.07) Pimpoint/01 - Dawn.mp3")
TrackFile.create( user_id:5, track_id:22, url:"https://s3-us-west-1.amazonaws.com/major9/(2007.03.07) Pimpoint/02 - A.I.E.mp3")
TrackFile.create( user_id:5, track_id:23, url:"https://s3-us-west-1.amazonaws.com/major9/(2007.03.07) Pimpoint/03 - Makuroke.mp3")
TrackFile.create( user_id:5, track_id:24, url:"https://s3-us-west-1.amazonaws.com/major9/(2007.03.07) Pimpoint/04 - Mashiroke.mp3")
TrackFile.create( user_id:5, track_id:25, url:"https://s3-us-west-1.amazonaws.com/major9/(2007.03.07) Pimpoint/05 - We Want More!!!!!.mp3")
TrackFile.create( user_id:5, track_id:26, url:"https://s3-us-west-1.amazonaws.com/major9/(2007.03.07) Pimpoint/06 - Zambezi.mp3")
TrackFile.create( user_id:5, track_id:27, url:"https://s3-us-west-1.amazonaws.com/major9/(2007.03.07) Pimpoint/07 - Red Clay.mp3")
TrackFile.create( user_id:5, track_id:28, url:"https://s3-us-west-1.amazonaws.com/major9/(2007.03.07) Pimpoint/08 - Hype Of Gold.mp3")
TrackFile.create( user_id:5, track_id:29, url:"https://s3-us-west-1.amazonaws.com/major9/(2007.03.07) Pimpoint/09 - Pluto.mp3")
TrackFile.create( user_id:5, track_id:30, url:"https://s3-us-west-1.amazonaws.com/major9/(2007.03.07) Pimpoint/10 - The Party.mp3")
TrackFile.create( user_id:5, track_id:31, url:"https://s3-us-west-1.amazonaws.com/major9/(2007.03.07) Pimpoint/11 - Funky Goldman.mp3")
TrackFile.create( user_id:5, track_id:32, url:"https://s3-us-west-1.amazonaws.com/major9/(2007.03.07) Pimpoint/12 - The Slaughter Suite.mp3")
TrackFile.create( user_id:5, track_id:33, url:"https://s3-us-west-1.amazonaws.com/major9/(2007.03.07) Pimpoint/13 - Scales.mp3")
TrackFile.create( user_id:5, track_id:34, url:"https://s3-us-west-1.amazonaws.com/major9/(2007.03.07) Pimpoint/14 - Sahara.mp3")
TrackFile.create( user_id:5, track_id:35, url:"https://s3-us-west-1.amazonaws.com/major9/CIRCLES+(Limited+Edition)/01.+%E3%82%B7%E3%82%99%E3%83%A3%E3%82%B9%E3%82%99%E3%82%A3%E3%83%BB%E3%82%AB%E3%83%B3%E3%82%A6%E3%82%99%E3%82%A1%E3%82%BB%E3%82%A4%E3%82%B7%E3%83%A7%E3%83%B3.mp3")
TrackFile.create( user_id:5, track_id:36, url:"https://s3-us-west-1.amazonaws.com/major9/CIRCLES+(Limited+Edition)/02.+%E6%AE%BA%E3%81%97%E5%B1%8B%E5%8D%B1%E6%A9%9F%E4%B8%80%E9%AB%AA.mp3")
TrackFile.create( user_id:5, track_id:37, url:"https://s3-us-west-1.amazonaws.com/major9/CIRCLES (Limited Edition)/03. Summer Love.mp3")
TrackFile.create( user_id:5, track_id:38, url:"https://s3-us-west-1.amazonaws.com/major9/CIRCLES (Limited Edition)/04. Bon Bon Villa.mp3")
TrackFile.create( user_id:5, track_id:39, url:"https://s3-us-west-1.amazonaws.com/major9/CIRCLES (Limited Edition)/05. Light Blue Soldier.mp3")
TrackFile.create( user_id:5, track_id:40, url:"https://s3-us-west-1.amazonaws.com/major9/CIRCLES (Limited Edition)/06. Iceburn.mp3")
TrackFile.create( user_id:5, track_id:41, url:"https://s3-us-west-1.amazonaws.com/major9/CIRCLES (Limited Edition)/07. Ananta.mp3")
TrackFile.create( user_id:5, track_id:42, url:"https://s3-us-west-1.amazonaws.com/major9/CIRCLES+(Limited+Edition)/08.+%E8%A8%98%E6%86%B6%E3%81%AE%E6%97%85.mp3")
TrackFile.create( user_id:5, track_id:43, url:"https://s3-us-west-1.amazonaws.com/major9/CIRCLES (Limited Edition)/09. Frog in the World!.mp3")
TrackFile.create( user_id:5, track_id:44, url:"https://s3-us-west-1.amazonaws.com/major9/CIRCLES (Limited Edition)/10. Hey Tagger, I?m Here.mp3")
TrackFile.create( user_id:5, track_id:45, url:"https://s3-us-west-1.amazonaws.com/major9/CIRCLES+(Limited+Edition)/11.+%E6%AE%BA%E3%81%97%E5%B1%8B%E5%8D%B1%E6%A9%9F%E4%B8%80%E9%AB%AA+(DEATH+JAZZ+ver.).mp3")

TrackFile.create( user_id:6, track_id:65, url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi Uehara (?????) - Spark [V0]/01 - Spark.mp3")
TrackFile.create( user_id:6, track_id:66, url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi Uehara (?????) - Spark [V0]/02 - In A Trance.mp3")
TrackFile.create( user_id:6, track_id:67, url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi Uehara (?????) - Spark [V0]/03 - Take Me Away.mp3")
TrackFile.create( user_id:6, track_id:68, url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi Uehara (?????) - Spark [V0]/04 - Wonder Land.mp3")
TrackFile.create( user_id:6, track_id:69, url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi Uehara (?????) - Spark [V0]/05 - Indulgence.mp3")
TrackFile.create( user_id:6, track_id:70, url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi Uehara (?????) - Spark [V0]/06 - Dilemma.mp3")
TrackFile.create( user_id:6, track_id:71, url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi Uehara (?????) - Spark [V0]/07 - What Will Be, Will Be.mp3")
TrackFile.create( user_id:6, track_id:72, url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi Uehara (?????) - Spark [V0]/08 - Wake Up And Dream.mp3")
TrackFile.create( user_id:6, track_id:73, url:"https://s3-us-west-1.amazonaws.com/major9/Hiromi Uehara (?????) - Spark [V0]/09 - All's Well.mp3")


TrackFile.create( user_id:7, track_id:74, url:"https://s3-us-west-1.amazonaws.com/major9/[2016.04.27] T-SQUARE - TREASURE HUNTER/01. Treasure Hunter.mp3")
TrackFile.create( user_id:7, track_id:75, url:"https://s3-us-west-1.amazonaws.com/major9/[2016.04.27] T-SQUARE - TREASURE HUNTER/02. Chops!!.mp3")
TrackFile.create( user_id:7, track_id:76, url:"https://s3-us-west-1.amazonaws.com/major9/[2016.04.27] T-SQUARE - TREASURE HUNTER/03. Metro 7.mp3")
TrackFile.create( user_id:7, track_id:77, url:"https://s3-us-west-1.amazonaws.com/major9/[2016.04.27] T-SQUARE - TREASURE HUNTER/04. Night Light.mp3")
TrackFile.create( user_id:7, track_id:78, url:"https://s3-us-west-1.amazonaws.com/major9/[2016.04.27] T-SQUARE - TREASURE HUNTER/05. 7-6-5.mp3")
TrackFile.create( user_id:7, track_id:79, url:"https://s3-us-west-1.amazonaws.com/major9/[2016.04.27] T-SQUARE - TREASURE HUNTER/06. Pearl of the Adriatic.mp3")
TrackFile.create( user_id:7, track_id:80, url:"https://s3-us-west-1.amazonaws.com/major9/[2016.04.27] T-SQUARE - TREASURE HUNTER/07. Double Rainbow.mp3")
TrackFile.create( user_id:7, track_id:81, url:"https://s3-us-west-1.amazonaws.com/major9/[2016.04.27] T-SQUARE - TREASURE HUNTER/08. Scissors Paper Rock.mp3")
TrackFile.create( user_id:7, track_id:82, url:"https://s3-us-west-1.amazonaws.com/major9/[2016.04.27] T-SQUARE - TREASURE HUNTER/09. Last Scene.mp3")
TrackFile.create( user_id:7, track_id:83, url:"https://s3-us-west-1.amazonaws.com/major9/T-SQUARE - Truth (1987) [MP3]/01 - T-Square - Grand Prix.mp3")
TrackFile.create( user_id:7, track_id:84, url:"https://s3-us-west-1.amazonaws.com/major9/T-SQUARE - Truth (1987) [MP3]/02 - T-Square - Celebration.mp3")
TrackFile.create( user_id:7, track_id:85, url:"https://s3-us-west-1.amazonaws.com/major9/T-SQUARE - Truth (1987) [MP3]/03 - T-Square - Beat in Beat.mp3")
TrackFile.create( user_id:7, track_id:86, url:"https://s3-us-west-1.amazonaws.com/major9/T-SQUARE - Truth (1987) [MP3]/04 - T-Square - Unexpected Lover.mp3")
TrackFile.create( user_id:7, track_id:87, url:"https://s3-us-west-1.amazonaws.com/major9/T-SQUARE - Truth (1987) [MP3]/05 - T-Square - Truth.mp3")
TrackFile.create( user_id:7, track_id:88, url:"https://s3-us-west-1.amazonaws.com/major9/T-SQUARE - Truth (1987) [MP3]/06 - T-Square - Breeze and You.mp3")
TrackFile.create( user_id:7, track_id:89, url:"https://s3-us-west-1.amazonaws.com/major9/T-SQUARE - Truth (1987) [MP3]/07 - T-Square - Giant Side Steps.mp3")
TrackFile.create( user_id:7, track_id:90, url:"https://s3-us-west-1.amazonaws.com/major9/T-SQUARE - Truth (1987) [MP3]/08 - T-Square - Because.mp3")
TrackFile.create( user_id:7, track_id:91, url:"https://s3-us-west-1.amazonaws.com/major9/T-SQUARE - Truth (1987) [MP3]/09 - T-Square - Twilight in Upper West.mp3")
TrackFile.create( user_id:7, track_id:92, url:"https://s3-us-west-1.amazonaws.com/major9/T-Square Plays The Square 320/01. Omens Of Love.mp3")
TrackFile.create( user_id:7, track_id:93, url:"https://s3-us-west-1.amazonaws.com/major9/T-Square Plays The Square 320/02. 宝島.mp3")
TrackFile.create( user_id:7, track_id:94, url:"https://s3-us-west-1.amazonaws.com/major9/T-Square Plays The Square 320/03. Hawaiiへ行きたい.mp3")
TrackFile.create( user_id:7, track_id:95, url:"https://s3-us-west-1.amazonaws.com/major9/T-Square Plays The Square 320/04. Little Pop Sugar.mp3")
TrackFile.create( user_id:7, track_id:96, url:"https://s3-us-west-1.amazonaws.com/major9/T-Square Plays The Square 320/05. Tomorrow's Affair.mp3")
TrackFile.create( user_id:7, track_id:97, url:"https://s3-us-west-1.amazonaws.com/major9/T-Square Plays The Square 320/06. Midnight Lover.mp3")
TrackFile.create( user_id:7, track_id:98, url:"https://s3-us-west-1.amazonaws.com/major9/T-Square Plays The Square 320/07. All About You.mp3")
TrackFile.create( user_id:7, track_id:99, url:"https://s3-us-west-1.amazonaws.com/major9/T-Square Plays The Square 320/08. Truth.mp3")
TrackFile.create( user_id:7, track_id:100, url:"https://s3-us-west-1.amazonaws.com/major9/T-Square Plays The Square 320/09. 脚線美の誘惑.mp3")
TrackFile.create( user_id:7, track_id:101, url:"https://s3-us-west-1.amazonaws.com/major9/T-Square Plays The Square 320/10. Dans Sa Chambre.mp3")
TrackFile.create( user_id:7, track_id:102, url:"https://s3-us-west-1.amazonaws.com/major9/T-Square Plays The Square 320/11. It's Magic.mp3")
TrackFile.create( user_id:7, track_id:103, url:"https://s3-us-west-1.amazonaws.com/major9/T-Square Plays The Square 320/12. Forgotten Saga.mp3")


TrackFile.create( user_id:8, track_id:104, url:"https://s3-us-west-1.amazonaws.com/major9/Pia-no-jaC - BLOOD/01 TASOGARE.mp3")
TrackFile.create( user_id:8, track_id:105, url:"https://s3-us-west-1.amazonaws.com/major9/Pia-no-jaC - BLOOD/02 Tears.mp3")
TrackFile.create( user_id:8, track_id:106, url:"https://s3-us-west-1.amazonaws.com/major9/Pia-no-jaC - BLOOD/03 Nostalgia.mp3")
TrackFile.create( user_id:8, track_id:107, url:"https://s3-us-west-1.amazonaws.com/major9/Pia-no-jaC - BLOOD/04 Binary Star.mp3")
TrackFile.create( user_id:8, track_id:108, url:"https://s3-us-west-1.amazonaws.com/major9/Pia-no-jaC - BLOOD/05 BLUE BLOOD BOOGIE.mp3")
TrackFile.create( user_id:8, track_id:109, url:"https://s3-us-west-1.amazonaws.com/major9/Pia-no-jaC - BLOOD/06 FILMS.mp3")
TrackFile.create( user_id:8, track_id:110, url:"https://s3-us-west-1.amazonaws.com/major9/Pia-no-jaC - BLOOD/07 Sicilia di mare aperto.mp3")
TrackFile.create( user_id:8, track_id:111, url:"https://s3-us-west-1.amazonaws.com/major9/Pia-no-jaC - EAT A CLASSIC 4 (2012) [320] for jps/01 - Night on Bald Mountain.mp3")
TrackFile.create( user_id:8, track_id:112, url:"https://s3-us-west-1.amazonaws.com/major9/Pia-no-jaC - EAT A CLASSIC 4 (2012) [320] for jps/02 - The Planets Jupiter, the Bringer of Jollity.mp3")
TrackFile.create( user_id:8, track_id:113, url:"https://s3-us-west-1.amazonaws.com/major9/Pia-no-jaC - EAT A CLASSIC 4 (2012) [320] for jps/03 - Hungarian Dance No.5.mp3")
TrackFile.create( user_id:8, track_id:114, url:"https://s3-us-west-1.amazonaws.com/major9/Pia-no-jaC - EAT A CLASSIC 4 (2012) [320] for jps/04 - Deux Arabesques Andantino con moto.mp3")
TrackFile.create( user_id:8, track_id:115, url:"https://s3-us-west-1.amazonaws.com/major9/Pia-no-jaC - EAT A CLASSIC 4 (2012) [320] for jps/05 - Fur Elise.mp3")
TrackFile.create( user_id:8, track_id:116, url:"https://s3-us-west-1.amazonaws.com/major9/Pia-no-jaC - EAT A CLASSIC 4 (2012) [320] for jps/06 - Gymnopedies No.1.mp3")
TrackFile.create( user_id:8, track_id:117, url:"https://s3-us-west-1.amazonaws.com/major9/?Pia-no-jaC? - Re-EARTH (2013) v0 for jps/01 - METROPOLIS.mp3")
TrackFile.create( user_id:8, track_id:118, url:"https://s3-us-west-1.amazonaws.com/major9/?Pia-no-jaC? - Re-EARTH (2013) v0 for jps/02 - Savanna.mp3")
TrackFile.create( user_id:8, track_id:119, url:"https://s3-us-west-1.amazonaws.com/major9/?Pia-no-jaC? - Re-EARTH (2013) v0 for jps/03 - Flor do Sol.mp3")
TrackFile.create( user_id:8, track_id:120, url:"https://s3-us-west-1.amazonaws.com/major9/?Pia-no-jaC? - Re-EARTH (2013) v0 for jps/04 - Triad.mp3")
TrackFile.create( user_id:8, track_id:121, url:"https://s3-us-west-1.amazonaws.com/major9/?Pia-no-jaC? - Re-EARTH (2013) v0 for jps/05 - ''Destruction'' a moll Op. 1, No.38.mp3")
TrackFile.create( user_id:8, track_id:122, url:"https://s3-us-west-1.amazonaws.com/major9/?Pia-no-jaC? - Re-EARTH (2013) v0 for jps/06 - 風雅.mp3")
TrackFile.create( user_id:8, track_id:123, url:"https://s3-us-west-1.amazonaws.com/major9/?Pia-no-jaC? - Re-EARTH (2013) v0 for jps/07 - Evergreen.mp3")



TrackFile.create( user_id:9, track_id:124, url:"https://s3-us-west-1.amazonaws.com/major9/Daihakken/01 東京事変 - 天国へようこそ.mp3")
TrackFile.create( user_id:9, track_id:125, url:"https://s3-us-west-1.amazonaws.com/major9/Daihakken/02 東京事変 - 絶対値対相対値.mp3")
TrackFile.create( user_id:9, track_id:126, url:"https://s3-us-west-1.amazonaws.com/major9/Daihakken/03 東京事変 - 新しい文明開化.mp3")
TrackFile.create( user_id:9, track_id:127, url:"https://s3-us-west-1.amazonaws.com/major9/Daihakken/04 東京事変 - 電気のない都市.mp3")
TrackFile.create( user_id:9, track_id:128, url:"https://s3-us-west-1.amazonaws.com/major9/Daihakken/05 東京事変 - 海底に巣くう男.mp3")
TrackFile.create( user_id:9, track_id:129, url:"https://s3-us-west-1.amazonaws.com/major9/Daihakken/06 東京事変 - 禁じられた遊ひ.mp3")
TrackFile.create( user_id:9, track_id:130, url:"https://s3-us-west-1.amazonaws.com/major9/Daihakken/07 東京事変 - ドーパミント!.mp3")
TrackFile.create( user_id:9, track_id:131, url:"https://s3-us-west-1.amazonaws.com/major9/Daihakken/08 東京事変 - 恐るべき大人達.mp3")
TrackFile.create( user_id:9, track_id:132, url:"https://s3-us-west-1.amazonaws.com/major9/Daihakken/09 東京事変 - 21世紀宇宙の子.mp3")
TrackFile.create( user_id:9, track_id:133, url:"https://s3-us-west-1.amazonaws.com/major9/Daihakken/10 東京事変 - かつては男と女.mp3")
TrackFile.create( user_id:9, track_id:134, url:"https://s3-us-west-1.amazonaws.com/major9/Daihakken/11 東京事変 - 空が鳴っている.mp3")
TrackFile.create( user_id:9, track_id:135, url:"https://s3-us-west-1.amazonaws.com/major9/Daihakken/12 東京事変 - 風に肖って行け.mp3")
TrackFile.create( user_id:9, track_id:136, url:"https://s3-us-west-1.amazonaws.com/major9/Daihakken/13 東京事変 - 女の子は誰でも.mp3")
TrackFile.create( user_id:9, track_id:137, url:"https://s3-us-west-1.amazonaws.com/major9/Daihakken/14 東京事変 - 天国へようこそ.mp3")
TrackFile.create( user_id:9, track_id:138, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Incidents (東京事変) (2004) Kyouiku [Album] MP3 V0/01. Ringo no Uta.mp3")
TrackFile.create( user_id:9, track_id:139, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Incidents (東京事変) (2004) Kyouiku [Album] MP3 V0/02. Gunjou Biyori.mp3")
TrackFile.create( user_id:9, track_id:140, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Incidents (東京事変) (2004) Kyouiku [Album] MP3 V0/03. Nyuusui Negai.mp3")
TrackFile.create( user_id:9, track_id:141, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Incidents (東京事変) (2004) Kyouiku [Album] MP3 V0/04. Sounan.mp3")
TrackFile.create( user_id:9, track_id:142, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Incidents (東京事変) (2004) Kyouiku [Album] MP3 V0/05. Crawl.mp3")
TrackFile.create( user_id:9, track_id:143, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Incidents (東京事変) (2004) Kyouiku [Album] MP3 V0/06. Genjitsu ni Oite.mp3")
TrackFile.create( user_id:9, track_id:144, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Incidents (東京事変) (2004) Kyouiku [Album] MP3 V0/07. Genjitsu wo Warau.mp3")
TrackFile.create( user_id:9, track_id:145, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Incidents (東京事変) (2004) Kyouiku [Album] MP3 V0/08. Service.mp3")
TrackFile.create( user_id:9, track_id:146, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Incidents (東京事変) (2004) Kyouiku [Album] MP3 V0/09. Ekimae.mp3")
TrackFile.create( user_id:9, track_id:147, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Incidents (東京事変) (2004) Kyouiku [Album] MP3 V0/10. Omatsuri Sawagi.mp3")
TrackFile.create( user_id:9, track_id:148, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Incidents (東京事変) (2004) Kyouiku [Album] MP3 V0/11. Bokoku Joucho.mp3")
TrackFile.create( user_id:9, track_id:149, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Incidents (東京事変) (2004) Kyouiku [Album] MP3 V0/12. Yume no Ato.mp3")
TrackFile.create( user_id:9, track_id:150, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Jihen - album 2006.01.26 - Adult [320k]/Tokyo Jihen - Adult 01 - Himitsu.mp3")
TrackFile.create( user_id:9, track_id:151, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Jihen - album 2006.01.26 - Adult [320k]/Tokyo Jihen - Adult 02 - Kenka Joutou.mp3")
TrackFile.create( user_id:9, track_id:152, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Jihen - album 2006.01.26 - Adult [320k]/Tokyo Jihen - Adult 03 - Keshou Naoshi.mp3")
TrackFile.create( user_id:9, track_id:153, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Jihen - album 2006.01.26 - Adult [320k]/Tokyo Jihen - Adult 04 - Superstar.mp3")
TrackFile.create( user_id:9, track_id:154, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Jihen - album 2006.01.26 - Adult [320k]/Tokyo Jihen - Adult 05 - Shuraba adult ver..mp3")
TrackFile.create( user_id:9, track_id:155, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Jihen - album 2006.01.26 - Adult [320k]/Tokyo Jihen - Adult 06 - Yukiguni.mp3")
TrackFile.create( user_id:9, track_id:156, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Jihen - album 2006.01.26 - Adult [320k]/Tokyo Jihen - Adult 07 - Kabuki.mp3")
TrackFile.create( user_id:9, track_id:157, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Jihen - album 2006.01.26 - Adult [320k]/Tokyo Jihen - Adult 08 - Blackout.mp3")
TrackFile.create( user_id:9, track_id:158, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Jihen - album 2006.01.26 - Adult [320k]/Tokyo Jihen - Adult 09 - Tasogare Naki.mp3")
TrackFile.create( user_id:9, track_id:159, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Jihen - album 2006.01.26 - Adult [320k]/Tokyo Jihen - Adult 10 - Toumei Ningen.mp3")
TrackFile.create( user_id:9, track_id:160, url:"https://s3-us-west-1.amazonaws.com/major9/Tokyo Jihen - album 2006.01.26 - Adult [320k]/Tokyo Jihen - Adult 11 - Tegami.mp3")



TrackFile.create( user_id:10, track_id:161, url:"https://s3-us-west-1.amazonaws.com/major9/[2014.07.09] WALL/01 - Into the Wall.mp3")
TrackFile.create( user_id:10, track_id:162, url:"https://s3-us-west-1.amazonaws.com/major9/[2014.07.09] WALL/02 - Shissou Suru Senkou.mp3")
TrackFile.create( user_id:10, track_id:163, url:"https://s3-us-west-1.amazonaws.com/major9/[2014.07.09] WALL/03 - Elementary Stream.mp3")
TrackFile.create( user_id:10, track_id:164, url:"https://s3-us-west-1.amazonaws.com/major9/[2014.07.09] WALL/04 - Paranoid Android.mp3")
TrackFile.create( user_id:10, track_id:165, url:"https://s3-us-west-1.amazonaws.com/major9/[2014.07.09] WALL/05 - Helios.mp3")
TrackFile.create( user_id:10, track_id:166, url:"https://s3-us-west-1.amazonaws.com/major9/[2014.07.09] WALL/06 - Unsolved.mp3")
TrackFile.create( user_id:10, track_id:167, url:"https://s3-us-west-1.amazonaws.com/major9/[2014.07.09] WALL/07 - Tong Poo.mp3")
TrackFile.create( user_id:10, track_id:168, url:"https://s3-us-west-1.amazonaws.com/major9/[2014.07.09] WALL/08 - A,S,A.mp3")
TrackFile.create( user_id:10, track_id:169, url:"https://s3-us-west-1.amazonaws.com/major9/[2014.07.09] WALL/09 - This Wall.mp3")
TrackFile.create( user_id:10, track_id:170, url:"https://s3-us-west-1.amazonaws.com/major9/[2014.07.09] WALL/10 - The Beginning of the Myth, Ep.II.mp3")
TrackFile.create( user_id:10, track_id:171, url:"https://s3-us-west-1.amazonaws.com/major9/fox capture plan - butterfly [2015.11.04] (320k)/01 fox capture plan - The Beginning Of.mp3")
TrackFile.create( user_id:10, track_id:172, url:"https://s3-us-west-1.amazonaws.com/major9/fox capture plan - butterfly [2015.11.04] (320k)/02 fox capture plan - The Last Story of the Myth.mp3")
TrackFile.create( user_id:10, track_id:173, url:"https://s3-us-west-1.amazonaws.com/major9/fox capture plan - butterfly [2015.11.04] (320k)/03 fox capture plan - Butterfly Effect.mp3")
TrackFile.create( user_id:10, track_id:174, url:"https://s3-us-west-1.amazonaws.com/major9/fox capture plan - butterfly [2015.11.04] (320k)/04 fox capture plan - Konton to Souzou No Kikagaku.mp3")
TrackFile.create( user_id:10, track_id:175, url:"https://s3-us-west-1.amazonaws.com/major9/fox capture plan - butterfly [2015.11.04] (320k)/05 fox capture plan - With Wind.mp3")
TrackFile.create( user_id:10, track_id:176, url:"https://s3-us-west-1.amazonaws.com/major9/fox capture plan - butterfly [2015.11.04] (320k)/06 fox capture plan - Inchoate.mp3")
TrackFile.create( user_id:10, track_id:177, url:"https://s3-us-west-1.amazonaws.com/major9/fox capture plan - butterfly [2015.11.04] (320k)/07 fox capture plan - Plug in Baby.mp3")
TrackFile.create( user_id:10, track_id:178, url:"https://s3-us-west-1.amazonaws.com/major9/fox capture plan - butterfly [2015.11.04] (320k)/08 fox capture plan - Kaleidoscope.mp3")
TrackFile.create( user_id:10, track_id:179, url:"https://s3-us-west-1.amazonaws.com/major9/fox capture plan - butterfly [2015.11.04] (320k)/09 fox capture plan - In the Darkness.mp3")
TrackFile.create( user_id:10, track_id:180, url:"https://s3-us-west-1.amazonaws.com/major9/fox capture plan - butterfly [2015.11.04] (320k)/10 fox capture plan - Christmas Comes to Our Place.mp3")
TrackFile.create( user_id:10, track_id:181, url:"https://s3-us-west-1.amazonaws.com/major9/fox capture plan - butterfly [2015.11.04] (320k)/11 fox capture plan - Supersonic.mp3")
TrackFile.create( user_id:10, track_id:182, url:"https://s3-us-west-1.amazonaws.com/major9/Fox Capture Plan-Trinity/01. polynity.m4a")
TrackFile.create( user_id:10, track_id:183, url:"https://s3-us-west-1.amazonaws.com/major9/Fox Capture Plan-Trinity/02. shoudou no ryuushi.m4a")
TrackFile.create( user_id:10, track_id:184, url:"https://s3-us-west-1.amazonaws.com/major9/Fox Capture Plan-Trinity/03. reincarnation.m4a")
TrackFile.create( user_id:10, track_id:185, url:"https://s3-us-west-1.amazonaws.com/major9/Fox Capture Plan-Trinity/04. exceed the limit.m4a")
TrackFile.create( user_id:10, track_id:186, url:"https://s3-us-west-1.amazonaws.com/major9/Fox Capture Plan-Trinity/05. trinity.m4a")
TrackFile.create( user_id:10, track_id:187, url:"https://s3-us-west-1.amazonaws.com/major9/Fox Capture Plan-Trinity/06. white ambience.m4a")
TrackFile.create( user_id:10, track_id:188, url:"https://s3-us-west-1.amazonaws.com/major9/Fox Capture Plan-Trinity/07. dark matter.m4a")
TrackFile.create( user_id:10, track_id:189, url:"https://s3-us-west-1.amazonaws.com/major9/Fox Capture Plan-Trinity/08. wonderwall.m4a")
TrackFile.create( user_id:10, track_id:190, url:"https://s3-us-west-1.amazonaws.com/major9/Fox Capture Plan-Trinity/09. good night.m4a")
TrackFile.create( user_id:10, track_id:191, url:"https://s3-us-west-1.amazonaws.com/major9/Fox Capture Plan-Trinity/10. the begining of the myth.m4a")


TrackFile.create( user_id:11, track_id:192, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - OOPARTS [MP3][2009.08.05]/01. AREA51.mp3")
TrackFile.create( user_id:11, track_id:193, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - OOPARTS [MP3][2009.08.05]/02. CRYSTAL SKULL.mp3")
TrackFile.create( user_id:11, track_id:194, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - OOPARTS [MP3][2009.08.05]/03. シアワセノコモレヒ.mp3")
TrackFile.create( user_id:11, track_id:195, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - OOPARTS [MP3][2009.08.05]/04. バミューダ・トライアングル.mp3")
TrackFile.create( user_id:11, track_id:196, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - OOPARTS [MP3][2009.08.05]/05. 黄金ジェット.mp3")
TrackFile.create( user_id:11, track_id:197, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - OOPARTS [MP3][2009.08.05]/06. Fish in the sky.mp3")
TrackFile.create( user_id:11, track_id:198, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - OOPARTS [MP3][2009.08.05]/07. Fiesta.mp3")
TrackFile.create( user_id:11, track_id:199, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - OOPARTS [MP3][2009.08.05]/08. Behind the wind(DJ HEAVYGRINDER Remix).mp3")
TrackFile.create( user_id:11, track_id:200, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - Seme Moeru [MP3][2010.10.02]/01 Round Mirror Moon feat. Yoshika (from SOULHEAD).mp3")
TrackFile.create( user_id:11, track_id:201, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - Seme Moeru [MP3][2010.10.02]/02 Red.mp3")
TrackFile.create( user_id:11, track_id:202, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - Seme Moeru [MP3][2010.10.02]/03 ソレソレ.mp3")
TrackFile.create( user_id:11, track_id:203, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - Seme Moeru [MP3][2010.10.02]/04 Hot Guys.mp3")
TrackFile.create( user_id:11, track_id:204, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - Seme Moeru [MP3][2010.10.02]/05 Natural High feat. Tsugumi (from SOULHEAD).mp3")
TrackFile.create( user_id:11, track_id:205, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - Seme Moeru [MP3][2010.10.02]/06 センキュー!.mp3")
TrackFile.create( user_id:11, track_id:206, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - Seme Moeru [MP3][2010.10.02]/07 Shake Bossa Groovy.mp3")
TrackFile.create( user_id:11, track_id:207, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - Seme Moeru [MP3][2010.10.02]/08 本日モ晴天ナリ.mp3")
TrackFile.create( user_id:11, track_id:208, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - Seme Moeru [MP3][2010.10.02]/09 森people.mp3")
TrackFile.create( user_id:11, track_id:209, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - Seme Moeru [MP3][2010.10.02]/10 SASURAI.mp3")
TrackFile.create( user_id:11, track_id:210, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - Seme Moeru [MP3][2010.10.02]/11 攻め燃える.mp3")
TrackFile.create( user_id:11, track_id:211, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - Seme Moeru [MP3][2010.10.02]/12 シロクマ ／ JABBERLOOP吹奏楽団.mp3")
TrackFile.create( user_id:11, track_id:212, url:"https://s3-us-west-1.amazonaws.com/major9/JABBERLOOP - Seme Moeru [MP3][2010.10.02]/13 荘厳伝説 ／ JABBERLOOP吹奏楽団.mp3")
