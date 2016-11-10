export const PLAY_SONG = "PLAY_SONG"
export const PLAY_SONGS = "PLAY_SONGS"

export const playSong = (song) => ({
  type:PLAY_SONG,
  song
})

export const playSongs = (songs) => ({
  type: PLAY_SONGS,
  songs
})
