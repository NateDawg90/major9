import AudioPlayer from 'react-responsive-audio-player'
import React from 'react'


class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: this.props.songs
    }
  }
  render() {
    let song1 = {
      url: 'https://s3-us-west-1.amazonaws.com/major9/5-21+%E4%B8%87%E8%8F%AF%E9%8F%A1.mp3',
      displayText: 'Mangekyou by Jimmy Weckl'
    }

    let song2 = {
      url: "https://s3-us-west-1.amazonaws.com/major9/4-31+Keiko+my+love.mp3",
      displayText: "Keiko My Love by Jimmy Weckl"
    }

    let songs = [song1,song2]

    return(
      <footer>
        <AudioPlayer playlist={songs} hideBackSkip={true}  />
      </footer>
    )
  }
}

export default Footer
