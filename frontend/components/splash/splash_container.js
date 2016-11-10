import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {fetchArtists} from '../../actions/album_actions'
import Splash from './splash';


const mapStateToProps = (state) => ({
  artists: state.albums.artists,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch) => {
  return{
  fetchArtists: () => dispatch(fetchArtists())
}}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash));
