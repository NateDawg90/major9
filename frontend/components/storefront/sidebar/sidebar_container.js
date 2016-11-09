import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Sidebar from './sidebar';
import {fetchAlbums, fetchArtist,editAlbumMode, deleteAlbum} from '../../../actions/album_actions';
import {fetchTracks} from '../../../actions/track_actions';
import {receiveErrors} from '../../../actions/session_actions';
const mapStateToProps = (state, ownProps) => ({
  tracks: state.tracks,
  albums: state.albums,
  albumCount: state.albums.albums,
  errors: state.errors,
  currentUser: state.session.currentUser,
  editMode: state.albums.editMode,
  count: state.albums.albums.count
})

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: (userId) => dispatch(fetchAlbums(userId)),
  fetchTracks: (albumId) => dispatch(fetchTracks(albumId)),
  fetchArtist: () => dispatch(fetchArtist(ownProps.params.artistId)),
  editAlbumMode: (toggle) => dispatch(editAlbumMode(toggle)),
  deleteAlbum: (albumId) => dispatch(deleteAlbum(albumId)),
  clearErrors: (blank) => dispatch(receiveErrors(blank))
})

export default withRouter(connect(
 mapStateToProps,
 mapDispatchToProps
)(Sidebar));
