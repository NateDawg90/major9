import AudioPlayer from 'react-responsive-audio-player'
import React from 'react'


class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: this.props.songs
    }
  }

  //Playlist will equal the rest of the album starting from where the play button is clicked
  //Play button should stop and start this player from the track list
  //START DYNO

  //autoclick play when updated
  componentDidUpdate() {
     ($('#play_pause_button'));
    window.setTimeout(() => {$('#play_pause_button').click()}, 500);

  }

  render() {
    //Consider sending in a blank playlist first to clear it out so we can start
    // from earlier tracks
    let trackPlaylist = [];
    this.props.songs.tracks.forEach( (song, index) => {
      if (this.props.songs.trackFiles[index]) {
        if(this.props.songs.trackFiles[index].track_id == song.id){
      trackPlaylist.push({
        url: this.props.songs.trackFiles[index].url,
        displayText: `${song.track_number}. ${song.track_name} by ${song.artist.artist_name}`
        }
      )
    }
      }
    //
    // this.props.songs.trackFiles.forEach( (track, index) => {
    //   if (this.props.songs.tracks[index].id == track.track_id){
    //     trackPlaylist.push({
    //       url: this.props.songs.trackFiles[index].url,
    //       displayText: `${song.track_number}. ${song.track_name} by ${song.artist.artist_name}`
    //       }
    //     )
    //   } else ({
    //     difference = track.track_id - this.props.songs.tracks[index].id
    //
    //   })

    // })


    })

    //  (trackPlaylist);
    // let song1 = {
    //   url: 'https://s3-us-west-1.amazonaws.com/major9/5-21+%E4%B8%87%E8%8F%AF%E9%8F%A1.mp3',
    //   artist: {
    //     name: 'Jimmy Weckl',
    //     song: 'Mangekyou'
    //   }
    // }
    //
    // let song2 = {
    //   url: "https://s3-us-west-1.amazonaws.com/major9/4-31+Keiko+my+love.mp3",
    //   artist: {
    //     name: 'Jimmy Weckl',
    //     song: 'Keiko My Love'
    //   }
    // }
    //
    // let songs = [song1,song2]
    //  (songs);
    //  (AudioPlayer);
    let hidden = (trackPlaylist.length === 0) ? "hidden" : "animated bounceInUp "
    return(
      <footer className={hidden}>
        <AudioPlayer playlist={trackPlaylist} hideBackSkip={true}
          autoplay={true}
          autoplayDelayInSeconds={1000} />
      </footer>
    )
  }
}

export default Footer
