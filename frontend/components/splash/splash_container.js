import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {fetchArtists} from '../../actions/album_actions'
import Splash from './splash';
import {playTracks} from '../../actions/player_actions'


const mapStateToProps = (state) => ({
  artists: state.albums.artists,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch) => {
  return{
  fetchArtists: () => dispatch(fetchArtists()),
  playTracks: (track, trackFiles) => dispatch(playTracks(track, trackFiles)),
}}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash));
