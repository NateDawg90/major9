export const FETCH_ALBUMS = "FETCH_ALBUMS";
export const FETCH_ALBUM = "FETCH_ALBUM";
export const CREATE_ALBUM = "CREATE_ALBUM";
export const UPDATE_ALBUM = "UPDATE_ALBUM";
export const DELETE_ALBUM = "DELETE_ALBUM";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";


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
