export const FETCH_TRACKS = "FETCH_TRACKS";
export const FETCH_TRACK = "FETCH_TRACK";
export const CREATE_TRACK = "CREATE_TRACK";
export const UPDATE_TRACK = "UPDATE_TRACK";
export const DELETE_TRACK = "DELETE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";

export const fetchTracks = (albumId) => ({
  type: FETCH_TRACKS,
  albumId
})

export const fetchTrack = (albumId, trackId) => ({
  type: FETCH_TRACK,
  albumId,
  trackId
})

export const createTrack = (albumId, track) => ({
  type: CREATE_TRACK,
  albumId,
  track
})

export const updateTrack = (albumId, track) => ({
  type: UPDATE_TRACK,
  albumId,
  track: track
})

export const deleteTrack = (albumId, trackNum) => ({
  type: DELETE_TRACK,
  albumId,
  trackNum
})

export const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks
})

export const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track
})

export const receiveTrackErrors = (trackErrors) => ({
  type: RECEIVE_TRACK_ERRORS,
  trackErrors
})
