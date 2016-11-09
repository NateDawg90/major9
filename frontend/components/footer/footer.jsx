import CLAudioPlayer from 'react-cl-audio-player'
import React from 'react'


class Footer extends React.Component {

  render() {
    let song1 = {
      url: 'https://s3-us-west-1.amazonaws.com/major9/5-21+%E4%B8%87%E8%8F%AF%E9%8F%A1.mp3',
      artist: {
        name: 'Jimmy Weckl',
        song: 'Mangekyou'
      }
    }

    let song2 = {
      url: "https://s3-us-west-1.amazonaws.com/major9/4-31+Keiko+my+love.mp3",
      artist: {
        name: 'Jimmy Weckl',
        song: 'Keiko My Love'
      }
    }

    let songs = [song1,song2]

    return(
      <footer>
        <CLAudioPlayer songs={songs} />
        Footer Here
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </footer>
    )
  }
}

export default Footer
