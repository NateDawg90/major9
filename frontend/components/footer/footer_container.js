import {connect} from 'react-redux';
import Footer from './footer';

const mapStateToProps = (state) => {
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
  // //
  // //
  return {
    songs: state.now_playing
  }}

export default connect(
  mapStateToProps
)(Footer)
