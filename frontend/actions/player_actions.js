export const PLAY_TRACK = "PLAY_TRACK"
export const PLAY_TRACKS = "PLAY_TRACKS"

export const playTrack = (song) => ({
  type:PLAY_TRACK,
  song
})

export const playTracks = (tracks, trackFiles) => ({
  type: PLAY_TRACKS,
  tracks,
  trackFiles
})
