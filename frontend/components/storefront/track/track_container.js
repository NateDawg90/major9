import {connect} from 'react-redux';
import Track from './track';
import {fetchTracks} from '../../../actions/track_actions';
import {fetchAlbum} from '../../../actions/album_actions';
import {withRouter} from 'react-router'

const mapStateToProps = (state, ownProps) => ({
  albums: state.albums,
  tracks: state.tracks
})

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (userId) => dispatch(fetchAlbum(userId)),
  fetchTracks: (albumId) => dispatch(fetchTracks(albumId))
})



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Track))
