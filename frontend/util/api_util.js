export const signup = (user, success, error) => {
  $.ajax({
    url: '/api/users',
    type: 'POST',
    data: user,
    success,
    error
  })
}

export const login = (user, success, error) => {
  $.ajax({
    url: '/api/session',
    type: 'POST',
    data: user,
    success,
    error
  })
}

export const logout = (success, error) => {
  $.ajax({
    url: '/api/session',
    type: 'DELETE',
    success,
    error
  })
}

//Consider whether or not I want to grab ALL the albums or
//ALL the albums from one user. Currently pulling from one user on backend.
export const fetchAlbums = (userId, success, error) => {
  $.ajax({
    url: '/api/albums',
    method: 'GET',
    artist_id: userId,
    success,
    error
  })
}

export const fetchAlbum = (albumId, success, error) => {
  $.ajax({
    url: `/api/albums/${albumId}`,
    method: 'GET',
    success,
    error
  })
}

export const createAlbum = (album, success, error) => {
  $.ajax({
    url: '/api/albums',
    method: 'POST',
    data: {album},
    success,
    error
  })
}

export const updateAlbum = (album, success, error) => {
  $.ajax({
    url: `/api/albums/${album.id}`,
    method: 'PATCH',
    data: {album},
    success,
    error
  })
}

export const deleteAlbum = (albumId, success, error) => {
  $.ajax({
    url: `/api/albums/${albumId}`,
    method: "DELETE",
    success,
    error
  })
}

export const fetchTracks = (albumId, success, error) => {
  $.ajax({
    url: `/api/albums/${albumId}/tracks`,
    method: 'GET',
    success,
    error
  })
}

// Not sure if I need this yet or not
// export const fetchTrack = (albumId, trackId, success, error) => {
//   $.ajax({
//     url: `/api/albums/${albumId}/tracks/${trackId}`,
//     method: 'GET',
//     success,
//     error
//   })
// }


export const createTrack = (albumId, track, success, error) => {
  $.ajax({
    url: `/api/albums/${albumId}/tracks`,
    method: 'POST',
    data: {track},
    success,
    error
  })
}

export const updateTrack = (albumId, track, success, error) => {
  $.ajax({
    url: `/api/albums/${albumId}/tracks/${track.id}`,
    method: 'PATCH',
    data: {track},
    success,
    error
  })
}

export const deleteTrack = (albumId, trackId, success, error) => {
  $.ajax({
    url: `/api/albums/${albumId}/tracks/${trackId}`,
    method: "DELETE",
    success,
    error
  })
}
