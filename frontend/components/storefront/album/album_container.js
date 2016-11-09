import {connect} from 'react-redux';
import Album from './album';
import {fetchTracks} from '../../../actions/track_actions';
import {updateAlbum, editAlbumMode} from '../../../actions/album_actions';
import {withRouter} from 'react-router'
const mapStateToProps = (state, ownProps) => ({
  albums: state.albums,
  tracks: state.tracks,
  editMode: state.albums.editMode,
  currentUser: state.session.currentUser,
  currentAlbum: state.albums.albums[ownProps.params.albumId]

})

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: (albumId) => dispatch(fetchTracks(albumId)),
  updateAlbum: (album) => dispatch(updateAlbum(album)),
  editAlbumMode: (toggle) => dispatch(editAlbumMode(toggle)),

})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Album))
