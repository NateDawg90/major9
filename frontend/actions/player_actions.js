export const PLAY_TRACK = "PLAY_TRACK"
export const PLAY_TRACKS = "PLAY_TRACKS"
export const PAUSE_TRACKS = "PAUSE_TRACKS"
export const RESUME_TRACKS = "RESUME_TRACKS"

export const playTrack = (song) => ({
  type:PLAY_TRACK,
  song
})

export const playTracks = (tracks, trackFiles) => ({
  type: PLAY_TRACKS,
  tracks,
  trackFiles
})

export const pauseTracks = () => ({
  type: PAUSE_TRACKS
})

export const resumeTracks = () => ({
  type: RESUME_TRACKS
})
