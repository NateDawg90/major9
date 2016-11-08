export const FETCH_ALBUMS = "FETCH_ALBUMS";
export const FETCH_ALBUM = "FETCH_ALBUM";
export const CREATE_ALBUM = "CREATE_ALBUM";
export const UPDATE_ALBUM = "UPDATE_ALBUM";
export const DELETE_ALBUM = "DELETE_ALBUM";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";
export const FETCH_ARTIST = "FETCH_ARTIST";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const EDIT_ALBUM_MODE = "EDIT_ALBUM_MODE";
export const DELETE_ALBUM_FROM_STORE = "DELETE_ALBUM_FROM_STORE"
export const fetchAlbums = (userId) => ({
  type: FETCH_ALBUMS,
  userId
})

export const fetchAlbum = (albumId) => ({
  type: FETCH_ALBUM,
  albumId
})

export const createAlbum = (album) => ({
  type: CREATE_ALBUM,
  album
})

export const updateAlbum = (album) => ({
  type: UPDATE_ALBUM,
  album
})

export const deleteAlbum = (albumId) => ({
  type: DELETE_ALBUM,
  albumId
})

export const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums
})

export const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album
})

export const receiveAlbumErrors = (albumErrors) => ({
  type: RECEIVE_ALBUM_ERRORS,
  albumErrors
})


export const fetchArtist = (artistId) => ({
  type: FETCH_ARTIST,
  artist_id
})

export const receiveArtist = (artist) => ({
  type: RECEIVE_ARTIST,
  artist
})

export const editAlbumMode = (toggle) => ({
  type: EDIT_ALBUM_MODE,
  toggle
})

export const deleteAlbumFromStore = (album) => ({
  type: DELETE_ALBUM,
  album
})
