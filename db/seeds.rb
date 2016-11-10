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

  Album.create(artist_id:1, image_url: "https://s3-us-west-1.amazonaws.com/major9/""https://s3-us-west-1.amazonaws.com/major9/7d52009dcdc24917c64059eb16244e93.jpg",
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
    image_url: "https://s3-us-west-1.amazonaws.com/major9/blue-moon-tree.jpg",
    lyrics: "La la la this is the blue bossa song lyrics",
    credits: "Target again for best deals.",
    bonus: true
    )
    Track.create(album_id:1, image_url:"https://s3-us-west-1.amazonaws.com/major9/download.jpeg", release_date: Date.new, track_number:2, price: 1, track_name:"Jam in Key of Toast")
    Track.create(album_id:1, image_url:"https://s3-us-west-1.amazonaws.com/major9/21076_4158.jpg", release_date: Date.new, track_number:3, price: 1, track_name:"Night in Tunisia")

  Album.create(artist_id:2, image_url: "https://s3-us-west-1.amazonaws.com/major9/funk-graffiti-vector_23-2147497930.jpg",
  album_name:"The Funkiest", price: 10, release_date:Date.new)

  Album.create(artist_id:2,
  about: "This album is super real.",
  album_name: "The Rockiest",
  credits: "Walmart has the okay deals.",
  description: "A rock album? Or an album for unstable roads? You decide.",
  image_url: "https://s3-us-west-1.amazonaws.com/major9/key+holder.jpg",
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
      TrackFile.create(user_id:3, track_id:7, url:"https://s3-us-west-1.amazonaws.com/major9/5-21+%E4%B8%87%E8%8F%AF%E9%8F%A1.mp3")
      TrackFile.create(user_id:3, track_id:8, url:"https://s3-us-west-1.amazonaws.com/major9/4-31+Keiko+my+love.mp3")



# 4
User.create(username:"neko", password:"573573", artist_name:"Nekomata Master",
about:"Best musician in Konami. Loves cats.", location: "Tokyo")

  Album.create(artist_id:4,
  about: "Nekomata Master drops yet another album filled with amazing soundscapes and intense chord progressions.",
  album_name: "Crevice",
  credits: "Konami Digital Entertainment",
  description: "",
  image_url: "https://s3-us-west-1.amazonaws.com/major9/GFCA-340.jpg",
  price: 40,
  release_date: "11/2/2016")
# 5
User.create(username:"soil", password:"hunter2", artist_name:"Soil & \"Pimp\" Sessions",
about:" Soil & "Pimp" Sessions is an energetic Japanese club jazz band that have started to receive international recognition. The band consists of six members: Shacho ("agitator"), Tabu Zombie (trumpet), Motoharu (sax), Josei (keyboards), Akita Goldman (double bass) and Midorin (drums).
", location: "Tokyo")

  Album.create(artist_id: 5, album_name: "Summer Goddess", price:"10", release_date:"2005.07.21",
  image_url:"https://s3-us-west-1.amazonaws.com/major9/Summer Goddess EP.jpg")
    Track.create(album_id: 6, release_date: "2005.07.21", price: 1, track_number:1, track_name: "follow")
    Track.create(album_id: 6, release_date: "2005.07.21", price: 1, track_number:2, track_name: "fragment")
    Track.create(album_id: 6, release_date: "2005.07.21", price: 1, track_number:3, track_name: "summer goddess")
    Track.create(album_id: 6, release_date: "2005.07.21", price: 1, track_number:4, track_name: "ms.b.c")
    Track.create(album_id: 6, release_date: "2005.07.21", price: 1, track_number:5, track_name: "sweat")

      TrackFile.create(user_id: 5, track_id:17, url: "https://s3-us-west-1.amazonaws.com/major9/(2005.07.21)+Summer+Goddess+%5B320%5D/01+-+follow.mp3")
      TrackFile.create(user_id: 5, track_id:18, url: "https://s3-us-west-1.amazonaws.com/major9/(2005.07.21)+Summer+Goddess+%5B320%5D/02+-+fragment.mp3")
      TrackFile.create(user_id: 5, track_id:19, url: "https://s3-us-west-1.amazonaws.com/major9/(2005.07.21)+Summer+Goddess+%5B320%5D/03+-+summer goddess.mp3")
      TrackFile.create(user_id: 5, track_id:20, url: "https://s3-us-west-1.amazonaws.com/major9/(2005.07.21)+Summer+Goddess+%5B320%5D/04+-+ms.b.c.mp3")
      TrackFile.create(user_id: 5, track_id:21, url: "https://s3-us-west-1.amazonaws.com/major9/(2005.07.21)+Summer+Goddess+%5B320%5D/05+-+sweat.mp3")


  Album.create(artist_id: 5, album_name: "Pimpoint", price: "20", release_date:"2007.03.07",
  image_url:"https://s3-us-west-1.amazonaws.com/major9/Pimpoint.jpg")
    Track.create(album_id:7, release_date:"2007.03.07", price: 1, track_number: 1, track_name: "Dawn")
    Track.create(album_id:7, release_date:"2007.03.07", price: 1, track_number: 2, track_name: "A.I.E")
    Track.create(album_id:7, release_date:"2007.03.07", price: 1, track_number: 3, track_name: "Makuroke")
    Track.create(album_id:7, release_date:"2007.03.07", price: 1, track_number: 4, track_name: "Mashiroke")
    Track.create(album_id:7, release_date:"2007.03.07", price: 1, track_number: 5, track_name: "We Want More!!!!!")
    Track.create(album_id:7, release_date:"2007.03.07", price: 1, track_number: 6, track_name: "Zambezi")
    Track.create(album_id:7, release_date:"2007.03.07", price: 1, track_number: 7, track_name: "Red Clay")
    Track.create(album_id:7, release_date:"2007.03.07", price: 1, track_number: 8, track_name: "Hype Of Gold")
    Track.create(album_id:7, release_date:"2007.03.07", price: 1, track_number: 9, track_name: "Pluto")
    Track.create(album_id:7, release_date:"2007.03.07", price: 1, track_number: 10, track_name: "The Party")
    Track.create(album_id:7, release_date:"2007.03.07", price: 1, track_number: 11, track_name: "Funky Goldman")
    Track.create(album_id:7, release_date:"2007.03.07", price: 1, track_number: 12, track_name: "The Slaughter Suite")
    Track.create(album_id:7, release_date:"2007.03.07", price: 1, track_number: 13, track_name: "Scales")
    Track.create(album_id:7, release_date:"2007.03.07", price: 1, track_number: 14, track_name: "Sahara")


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
about: "HAYATO (piano) and HIRO (cajon) formed →Pia-no-jaC← in April 2005, and they specialize in instrumental music just as the duo's name suggests. The name is a combination of "piano" and "cajon", with the latter spelt backwards from the right.
", location: "Tokyo")
# 9
User.create(username:"tokyojihen", password:"hunter2",artist_name:"Tokyo Jihen",
about: "Tokyo Jihen or Tokyo Incidents (東京事変 Tōkyō Jihen) was a Japanese band created by Shiina Ringo. The band was originally comprised of the backing members of her Sugoroku Ecstasy Tour. The band's debut single, "Gunjo Biyori", was released in September 2004.
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
Album.create(artist_id: , album_name: "", about:"", price: , release_date:"", image_url: "https://s3-us-west-1.amazonaws.com/major9/")
Track.create(album_id: , release_date: "", price: 1, track_number: , track_name: "")
TrackFile.create(user_id: , track_id: , url:" ")

Album.create(artist_id: , album_name: "", about:"", price: , release_date:"", image_url: "")
Track.create(album_id: , release_date: "", price: 1, track_number: , track_name: "")
TrackFile.create(user_id: , track_id: , url:" ")


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

Album.create(artist_id:5 , album_name: "Circles", about:"", price: 15, release_date:"2015", image_url: "https://s3-us-west-1.amazonaws.com/major9/Circles.jpg
")
Track.create(album_id: 8, release_date:"2015", price:1, track_number:1, track_name:"ジャズィ・カンヴァセイション")
Track.create(album_id: 8, release_date:"2015", price:1, track_number:2, track_name:"殺し屋危機一髪")
Track.create(album_id: 8, release_date:"2015", price:1, track_number:3, track_name:"Summer Love")
Track.create(album_id: 8, release_date:"2015", price:1, track_number:4, track_name:"Bon Bon Villa")
Track.create(album_id: 8, release_date:"2015", price:1, track_number:5, track_name:"Light Blue Soldier")
Track.create(album_id: 8, release_date:"2015", price:1, track_number:6, track_name:"Iceburn")
Track.create(album_id: 8, release_date:"2015", price:1, track_number:7, track_name:"Ananta")
Track.create(album_id: 8, release_date:"2015", price:1, track_number:8, track_name:"記憶の旅")
Track.create(album_id: 8, release_date:"2015", price:1, track_number:9, track_name:"Frog in the World!")
Track.create(album_id: 8, release_date:"2015", price:1, track_number:10, track_name:"Hey Tagger, I’m Here")
Track.create(album_id: 8, release_date:"2015", price:1, track_number:11, track_name:"殺し屋危機一髪 (DEATH JAZZ ver.)")
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
Album.create(artist_id:6 , album_name: "Another Mind", about:"", price: 9, release_date:"2005", image_url: "https://s3-us-west-1.amazonaws.com/major9/Another Mind.jpg")
Track.create(album_id:9, release_date:"2005", price: 1, track_number:1, track_name: "XYZ")
Track.create(album_id:9, release_date:"2005", price: 1, track_number:2, track_name: "Double Personality")
Track.create(album_id:9, release_date:"2005", price: 1, track_number:3, track_name: "Summer Rain")
Track.create(album_id:9, release_date:"2005", price: 1, track_number:4, track_name: "Joy")
Track.create(album_id:9, release_date:"2005", price: 1, track_number:5, track_name: "010101")
Track.create(album_id:9, release_date:"2005", price: 1, track_number:6, track_name: "Truth and Lies")
Track.create(album_id:9, release_date:"2005", price: 1, track_number:7, track_name: "Dancando No Pariso")
Track.create(album_id:9, release_date:"2005", price: 1, track_number:8, track_name: "Another Mind")
Track.create(album_id:9, release_date:"2005", price: 1, track_number:9, track_name: "The Tom and Jerry Show [bonus track]")
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

Album.create(artist_id:6 , album_name: "Alive", about:"", price: 12 , release_date:"2014", image_url: "https://s3-us-west-1.amazonaws.com/major9/Alive.jpg")
Track.create(album_id: 10, release_date: "2004", price: 1, track_number:1, track_name: "Alive")
Track.create(album_id: 10, release_date: "2004", price: 1, track_number:2, track_name: "Back")
Track.create(album_id: 10, release_date: "2004", price: 1, track_number:3, track_name: "Dreamer")
Track.create(album_id: 10, release_date: "2004", price: 1, track_number:4, track_name: "Firefly")
Track.create(album_id: 10, release_date: "2004", price: 1, track_number:5, track_name: "Life Goes On")
Track.create(album_id: 10, release_date: "2004", price: 1, track_number:6, track_name: "Player")
Track.create(album_id: 10, release_date: "2004", price: 1, track_number:7, track_name: "Seeker")
Track.create(album_id: 10, release_date: "2004", price: 1, track_number:8, track_name: "Spirit")
Track.create(album_id: 10, release_date: "2004", price: 1, track_number:9, track_name: "Wanderer")
Track.create(album_id: 10, release_date: "2004", price: 1, track_number:10, track_name: "Warrior")
# ./Alive.jpg

Album.create(artist_id:6 , album_name: "Spark", about:"", price: 10 , release_date:"2016", image_url: "https://s3-us-west-1.amazonaws.com/major9/Spark.jpg")
Track.create(album_id:11, release_date: "2016", price:1, track_number:1, track_name: "Spark")
Track.create(album_id:11, release_date: "2016", price:1, track_number:2, track_name: "In A Trance")
Track.create(album_id:11, release_date: "2016", price:1, track_number:3, track_name: "Take Me Away")
Track.create(album_id:11, release_date: "2016", price:1, track_number:4, track_name: "Wonder Land")
Track.create(album_id:11, release_date: "2016", price:1, track_number:5, track_name: "Indulgence")
Track.create(album_id:11, release_date: "2016", price:1, track_number:6, track_name: "Dilemma")
Track.create(album_id:11, release_date: "2016", price:1, track_number:7, track_name: "What Will Be, Will Be")
Track.create(album_id:11, release_date: "2016", price:1, track_number:8, track_name: "Wake Up And Dream")
Track.create(album_id:11, release_date: "2016", price:1, track_number:9, track_name: "Alls Well")
# ./Hiromi Uehara (上原ひろみ) - Spark [V0]/Spark Cover.jpg
# ./Spark.jpg

Album.create(artist_id:7 , album_name: "Treasure Hunter", about:"", price: 15, release_date:"2016.04.27", image_url: "https://s3-us-west-1.amazonaws.com/major9/treasure hunter.jpg")
Track.create(album_id:12, release_date:"2016.04.27", price:1.50, track_number:1, track_name:"Treasure Hunter")
Track.create(album_id:12, release_date:"2016.04.27", price:1.50, track_number:2, track_name:"Chops!!")
Track.create(album_id:12, release_date:"2016.04.27", price:1.50, track_number:3, track_name:"Metro 7")
Track.create(album_id:12, release_date:"2016.04.27", price:1.50, track_number:4, track_name:"Night Light")
Track.create(album_id:12, release_date:"2016.04.27", price:1.50, track_number:5, track_name:"7-6-5")
Track.create(album_id:12, release_date:"2016.04.27", price:1.50, track_number:6, track_name:"Pearl of the Adriatic")
Track.create(album_id:12, release_date:"2016.04.27", price:1.50, track_number:7, track_name:"Double Rainbow")
Track.create(album_id:12, release_date:"2016.04.27", price:1.50, track_number:8, track_name:"Scissors Paper Rock")
Track.create(album_id:12, release_date:"2016.04.27", price:1.50, track_number:9, track_name:"Last Scene")

Album.create(artist_id:7 , album_name: "Truth", about:"", price: 5, release_date:"1987", image_url: "https://s3-us-west-1.amazonaws.com/major9/truth.jpg")
Track.create(album_id:13, release_date:"1987", price: .50, track_number:1, track_name:"Grand Prix")
Track.create(album_id:13, release_date:"1987", price: .50, track_number:2, track_name:"Celebration")
Track.create(album_id:13, release_date:"1987", price: .50, track_number:3, track_name:"Beat in Beat")
Track.create(album_id:13, release_date:"1987", price: .50, track_number:4, track_name:"Unexpected Lover")
Track.create(album_id:13, release_date:"1987", price: .50, track_number:5, track_name:"Truth")
Track.create(album_id:13, release_date:"1987", price: .50, track_number:6, track_name:"Breeze and You")
Track.create(album_id:13, release_date:"1987", price: .50, track_number:7, track_name:"Giant Side Steps")
Track.create(album_id:13, release_date:"1987", price: .50, track_number:8, track_name:"Because")
Track.create(album_id:13, release_date:"1987", price: .50, track_number:9, track_name:"Twilight in Upper West")

Album.create(artist_id:7 , album_name: "T-Square Plays The Square", about:"", price: 10 , release_date:"1995", image_url: "https://s3-us-west-1.amazonaws.com/major9/takara kyoku.jpg")
Track.create(album_id:14, release_date:"1995", price: 1, track_number:1, track_name:"Omens Of Love")
Track.create(album_id:14, release_date:"1995", price: 1, track_number:2, track_name:"宝島")
Track.create(album_id:14, release_date:"1995", price: 1, track_number:3, track_name:"Hawaiiへ行きたい")
Track.create(album_id:14, release_date:"1995", price: 1, track_number:4, track_name:"Little Pop Sugar")
Track.create(album_id:14, release_date:"1995", price: 1, track_number:5, track_name:"Tomorrow's Affair")
Track.create(album_id:14, release_date:"1995", price: 1, track_number:6, track_name:"Midnight Lover")
Track.create(album_id:14, release_date:"1995", price: 1, track_number:7, track_name:"All About You")
Track.create(album_id:14, release_date:"1995", price: 1, track_number:8, track_name:"Truth")
Track.create(album_id:14, release_date:"1995", price: 1, track_number:9, track_name:"脚線美の誘惑")
Track.create(album_id:14, release_date:"1995", price: 1, track_number:10, track_name:"Dans Sa Chambre")
Track.create(album_id:14, release_date:"1995", price: 1, track_number:11, track_name:"It's Magic")
Track.create(album_id:14, release_date:"1995", price: 1, track_number:12, track_name:"Forgotten Saga")

Album.create(artist_id:8 , album_name: "BLOOD", about:"", price: 10, release_date:"2005", image_url: "https://s3-us-west-1.amazonaws.com/major9/BLOOD.jpg")
Track.create(album_id: 15, release_date:"2005", price: 2, track_number:1, track_name:"TASOGARE")
Track.create(album_id: 15, release_date:"2005", price: 2, track_number:2, track_name:"Tears")
Track.create(album_id: 15, release_date:"2005", price: 2, track_number:3, track_name:"Nostalgia")
Track.create(album_id: 15, release_date:"2005", price: 2, track_number:4, track_name:"Binary Star")
Track.create(album_id: 15, release_date:"2005", price: 2, track_number:5, track_name:"BLUE BLOOD BOOGIE")
Track.create(album_id: 15, release_date:"2005", price: 2, track_number:6, track_name:"FILMS")
Track.create(album_id: 15, release_date:"2005", price: 2, track_number:7, track_name:"Sicilia di mare aperto")


Album.create(artist_id:8 , album_name: "EAT A CLASSIC 4", about:"", price: 8 , release_date:"2012", image_url: "https://s3-us-west-1.amazonaws.com/major9/EAT A CLASSIC 4.jpg")
Track.create(album_id:16, release_date:"2012", price: 2, track_number:1, track_name:"Night on Bald Mountain")
Track.create(album_id:16, release_date:"2012", price: 2, track_number:2, track_name:"The Planets Jupiter, the Bringer of Jollity")
Track.create(album_id:16, release_date:"2012", price: 2, track_number:3, track_name:"Hungarian Dance No.5")
Track.create(album_id:16, release_date:"2012", price: 2, track_number:4, track_name:"Deux Arabesques Andantino con moto")
Track.create(album_id:16, release_date:"2012", price: 2, track_number:5, track_name:"Fur Elise")
Track.create(album_id:16, release_date:"2012", price: 2, track_number:6, track_name:"Gymnopedies No.1")
# ./EAT A CLASSIC 4.jpg

Album.create(artist_id:8 , album_name: "Re-EARTH", about:"", price: 10, release_date:"2013", image_url: "https://s3-us-west-1.amazonaws.com/major9/Re-Earth.jpg")
Track.create(album_id:17, release_date: "2013", price: 2, track_number:1, track_name: "METROPOLIS")
Track.create(album_id:17, release_date: "2013", price: 2, track_number:2, track_name: "Savanna")
Track.create(album_id:17, release_date: "2013", price: 2, track_number:3, track_name: "Flor do Sol")
Track.create(album_id:17, release_date: "2013", price: 2, track_number:4, track_name: "Triad")
Track.create(album_id:17, release_date: "2013", price: 2, track_number:5, track_name: "''Destruction'' a moll Op. 1, No.38")
Track.create(album_id:17, release_date: "2013", price: 2, track_number:6, track_name: "風雅")
Track.create(album_id:17, release_date: "2013", price: 2, track_number:7, track_name: "Evergreen")

Album.create(artist_id:9 , album_name: "大発見", about:"", price: 10 , release_date:"2014", image_url: "https://s3-us-west-1.amazonaws.com/major9/daihakken.jpg")
Track.create(album_id:18, release_date: "2014", price: 1, track_number:1, track_name: "天国へようこそ")
Track.create(album_id:18, release_date: "2014", price: 1, track_number:2, track_name: "絶対値対相対値")
Track.create(album_id:18, release_date: "2014", price: 1, track_number:3, track_name: "新しい文明開化")
Track.create(album_id:18, release_date: "2014", price: 1, track_number:4, track_name: "電気のない都市")
Track.create(album_id:18, release_date: "2014", price: 1, track_number:5, track_name: "海底に巣くう男")
Track.create(album_id:18, release_date: "2014", price: 1, track_number:6, track_name: "禁じられた遊び")
Track.create(album_id:18, release_date: "2014", price: 1, track_number:7, track_name: "ドーパミント!")
Track.create(album_id:18, release_date: "2014", price: 1, track_number:8, track_name: "恐るべき大人達")
Track.create(album_id:18, release_date: "2014", price: 1, track_number:9, track_name: "21世紀宇宙の子")
Track.create(album_id:18, release_date: "2014", price: 1, track_number:10, track_name: "かつては男と女")
Track.create(album_id:18, release_date: "2014", price: 1, track_number:11, track_name: "空が鳴っている")
Track.create(album_id:18, release_date: "2014", price: 1, track_number:12, track_name: "風に肖って行け")
Track.create(album_id:18, release_date: "2014", price: 1, track_number:13, track_name: "女の子は誰でも")
Track.create(album_id:18, release_date: "2014", price: 1, track_number:14, track_name: "天国へようこそ")

Album.create(artist_id:9 , album_name: "Kyouiku", about:"", price: 10, release_date:"2004", image_url: "https://s3-us-west-1.amazonaws.com/major9/kyouiku.jpg")
Track.create(album_id:19, release_date: "2004", price: 1, track_number:1, track_name: "Ringo no Uta")
Track.create(album_id:19, release_date: "2004", price: 1, track_number:2, track_name: "Gunjou Biyori")
Track.create(album_id:19, release_date: "2004", price: 1, track_number:3, track_name: "Nyuusui Negai")
Track.create(album_id:19, release_date: "2004", price: 1, track_number:4, track_name: "Sounan")
Track.create(album_id:19, release_date: "2004", price: 1, track_number:5, track_name: "Crawl")
Track.create(album_id:19, release_date: "2004", price: 1, track_number:6, track_name: "Genjitsu ni Oite")
Track.create(album_id:19, release_date: "2004", price: 1, track_number:7, track_name: "Genjitsu wo Warau")
Track.create(album_id:19, release_date: "2004", price: 1, track_number:8, track_name: "Service")
Track.create(album_id:19, release_date: "2004", price: 1, track_number:9, track_name: "Ekimae")
Track.create(album_id:19, release_date: "2004", price: 1, track_number:10, track_name: "Omatsuri Sawagi")
Track.create(album_id:19, release_date: "2004", price: 1, track_number:11, track_name: "Bokoku Joucho")
Track.create(album_id:19, release_date: "2004", price: 1, track_number:12, track_name: "Yume no Ato")

Album.create(artist_id:9 , album_name: "Adult", about:"", price: 15 , release_date:"2006", image_url: "https://s3-us-west-1.amazonaws.com/major9/adult.jpg")
Track.create(album_id:20, release_date: "2006", price: 2, track_number:1, track_name: "Himitsu")
Track.create(album_id:20, release_date: "2006", price: 2, track_number:2, track_name: "Kenka Joutou")
Track.create(album_id:20, release_date: "2006", price: 2, track_number:3, track_name: "Keshou Naoshi")
Track.create(album_id:20, release_date: "2006", price: 2, track_number:4, track_name: "Superstar")
Track.create(album_id:20, release_date: "2006", price: 2, track_number:5, track_name: "Shuraba adult ver.")
Track.create(album_id:20, release_date: "2006", price: 2, track_number:6, track_name: "Yukiguni")
Track.create(album_id:20, release_date: "2006", price: 2, track_number:7, track_name: "Kabuki")
Track.create(album_id:20, release_date: "2006", price: 2, track_number:8, track_name: "Blackout")
Track.create(album_id:20, release_date: "2006", price: 2, track_number:9, track_name: "Tasogare Naki")
Track.create(album_id:20, release_date: "2006", price: 2, track_number:10, track_name: "Toumei Ningen")
Track.create(album_id:20, release_date: "2006", price: 2, track_number:11, track_name: "Tegami")

Album.create(artist_id:10 , album_name: "WALL", about:"", price: 10 , release_date:"2014.07.09", image_url: "https://s3-us-west-1.amazonaws.com/major9/WALL.jpg")
Track.create(album_id:21, release_date:"2014.07.09", price: 1, track_number:1, track_name: "Into the Wall")
Track.create(album_id:21, release_date:"2014.07.09", price: 1, track_number:2, track_name: "Shissou Suru Senkou")
Track.create(album_id:21, release_date:"2014.07.09", price: 1, track_number:3, track_name: "Elementary Stream")
Track.create(album_id:21, release_date:"2014.07.09", price: 1, track_number:4, track_name: "Paranoid Android")
Track.create(album_id:21, release_date:"2014.07.09", price: 1, track_number:5, track_name: "Helios")
Track.create(album_id:21, release_date:"2014.07.09", price: 1, track_number:6, track_name: "Unsolved")
Track.create(album_id:21, release_date:"2014.07.09", price: 1, track_number:7, track_name: "Tong Poo")
Track.create(album_id:21, release_date:"2014.07.09", price: 1, track_number:8, track_name: "A,S,A")
Track.create(album_id:21, release_date:"2014.07.09", price: 1, track_number:9, track_name: "This Wall")
Track.create(album_id:21, release_date:"2014.07.09", price: 1, track_number:10, track_name: "The Beginning of the Myth, Ep.II")


Album.create(artist_id:10 , album_name: "butterfly", about:"", price: 12 , release_date:"2015.11.04", image_url: "https://s3-us-west-1.amazonaws.com/major9/Butterfly.jpg")
Track.create(album_id:22, release_date:"2015.11.04", price: 2, track_number:1, track_name:"The Beginning Of")
Track.create(album_id:22, release_date:"2015.11.04", price: 2, track_number:2, track_name:"The Last Story of the Myth")
Track.create(album_id:22, release_date:"2015.11.04", price: 2, track_number:3, track_name:"Butterfly Effect")
Track.create(album_id:22, release_date:"2015.11.04", price: 2, track_number:4, track_name:"Konton to Souzou No Kikagaku")
Track.create(album_id:22, release_date:"2015.11.04", price: 2, track_number:5, track_name:"With Wind")
Track.create(album_id:22, release_date:"2015.11.04", price: 2, track_number:6, track_name:"Inchoate")
Track.create(album_id:22, release_date:"2015.11.04", price: 2, track_number:7, track_name:"Plug in Baby")
Track.create(album_id:22, release_date:"2015.11.04", price: 2, track_number:8, track_name:"Kaleidoscope")
Track.create(album_id:22, release_date:"2015.11.04", price: 2, track_number:9, track_name:"In the Darkness")
Track.create(album_id:22, release_date:"2015.11.04", price: 2, track_number:10, track_name:"Christmas Comes to Our Place")
Track.create(album_id:22, release_date:"2015.11.04", price: 2, track_number:11, track_name:"Supersonic")

Album.create(artist_id:10 , album_name: "Trinity", about:"", price: 10 , release_date:"2014", image_url: "https://s3-us-west-1.amazonaws.com/major9/trinity.jpg")
Track.create(album_id:23, release_date:"2014", price: 1, track_number:1, track_name: "polynity")
Track.create(album_id:23, release_date:"2014", price: 1, track_number:2, track_name: "shoudou no ryuushi")
Track.create(album_id:23, release_date:"2014", price: 1, track_number:3, track_name: "reincarnation")
Track.create(album_id:23, release_date:"2014", price: 1, track_number:4, track_name: "exceed the limit")
Track.create(album_id:23, release_date:"2014", price: 1, track_number:5, track_name: "trinity")
Track.create(album_id:23, release_date:"2014", price: 1, track_number:6, track_name: "white ambience")
Track.create(album_id:23, release_date:"2014", price: 1, track_number:7, track_name: "dark matter")
Track.create(album_id:23, release_date:"2014", price: 1, track_number:8, track_name: "wonderwall")
Track.create(album_id:23, release_date:"2014", price: 1, track_number:9, track_name: "good night")
Track.create(album_id:23, release_date:"2014", price: 1, track_number:10, track_name: "the begining of the myth")

Album.create(artist_id:11 , album_name: "OOPARTS", about:"", price: 10, release_date:"2009.08.05", image_url: "https://s3-us-west-1.amazonaws.com/major9/OOParts.jpg")

Track.create(album_id:24, release_date:"2009.08.05", price: 2, track_number:1, track_name: "AREA51")
Track.create(album_id:24, release_date:"2009.08.05", price: 2, track_number:2, track_name: "CRYSTAL SKULL")
Track.create(album_id:24, release_date:"2009.08.05", price: 2, track_number:3, track_name: "シアワセノコモレビ")
Track.create(album_id:24, release_date:"2009.08.05", price: 2, track_number:4, track_name: "バミューダ・トライアングル")
Track.create(album_id:24, release_date:"2009.08.05", price: 2, track_number:5, track_name: "黄金ジェット")
Track.create(album_id:24, release_date:"2009.08.05", price: 2, track_number:6, track_name: "Fish in the sky")
Track.create(album_id:24, release_date:"2009.08.05", price: 2, track_number:7, track_name: "Fiesta")
Track.create(album_id:24, release_date:"2009.08.05", price: 2, track_number:8, track_name: "Behind the wind(DJ HEAVYGRINDER Remix)")


Album.create(artist_id:11 , album_name: "Seme Moeru", about:"", price: 20 , release_date:"2010.10.02", image_url: "https://s3-us-west-1.amazonaws.com/major9/Seme Moeru.jpg")
Track.create(album_id:25, release_date:"2010.10.02", price: 2, track_number:1, track_name: "Round Mirror Moon feat. Yoshika (from SOULHEAD)")
Track.create(album_id:25, release_date:"2010.10.02", price: 2, track_number:2, track_name: "Red")
Track.create(album_id:25, release_date:"2010.10.02", price: 2, track_number:3, track_name: "ソレソレ")
Track.create(album_id:25, release_date:"2010.10.02", price: 2, track_number:4, track_name: "Hot Guys")
Track.create(album_id:25, release_date:"2010.10.02", price: 2, track_number:5, track_name: "Natural High feat. Tsugumi (from SOULHEAD)")
Track.create(album_id:25, release_date:"2010.10.02", price: 2, track_number:6, track_name: "センキュー!")
Track.create(album_id:25, release_date:"2010.10.02", price: 2, track_number:7, track_name: "Shake Bossa Groovy")
Track.create(album_id:25, release_date:"2010.10.02", price: 2, track_number:8, track_name: "本日モ晴天ナリ")
Track.create(album_id:25, release_date:"2010.10.02", price: 2, track_number:9, track_name: "森people")
Track.create(album_id:25, release_date:"2010.10.02", price: 2, track_number:10, track_name: "SASURAI")
Track.create(album_id:25, release_date:"2010.10.02", price: 2, track_number:11, track_name: "攻め燃える")
Track.create(album_id:25, release_date:"2010.10.02", price: 2, track_number:12, track_name: "シロクマ ／ JABBERLOOP吹奏楽団")
Track.create(album_id:25, release_date:"2010.10.02", price: 2, track_number:13, track_name: "荘厳伝説 ／ JABBERLOOP吹奏楽団")
