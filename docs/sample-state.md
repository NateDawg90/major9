{
  currentUser: {
    id: 1,
    username: "jazzBoi"
  },
  search: {
    query: "",
    errors: []
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createTrack: {errors: []},
    createAlbum: {errors: []}
  }
  currentPlaying: {
    songId: 254,
    songName: "Ocean Beach",
    artist: "The a/A Rapstone Project"
  },
  albums: {
    1:{
      name: "Live @ The Winery",
      price: 15,
      downloadable: "yes",
      image_url:"img.src/img1.jpg"
      tag: ['cool', 'rockabilly', 'jazz' ],
      description: "Only cool cats were at this concert. Meow."
    },
    2:{
      name: "Breakfast @ Markov's",
      price: 5,
      downloadable: "no",
      image_url:"img.src/img2.jpg"
      tag: ['cool', 'rockabilly', 'jazz' ],
      description: "Oh my god how did this get on here and why is it making so much money."
    }
  },
  artist: {
    name: "The a/A Rapstone Project",
    location: "San Francisco",
    followed: True,
    logo_url: "img.src/img500.jpg"
    discography:[album Object, album Object, album Object]

  }
}
