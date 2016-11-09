import {connect} from 'react-redux';
import Track from './track';
import {fetchTracks, updateTrack} from '../../../actions/track_actions';
import {fetchAlbum, editAlbumMode} from '../../../actions/album_actions';
import {withRouter} from 'react-router'

const mapStateToProps = (state, ownProps) => ({
  albums: state.albums,
  tracks: state.tracks,
  editMode: state.albums.editMode,
  currentUser: state.session.currentUser,
  currentAlbum: state.albums.albums[ownProps.params.albumId],
  currentTrack: state.albums.albums[ownProps.params.albumId].tracks[ownProps.params.trackId]
})

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (userId) => dispatch(fetchAlbum(userId)),
  fetchTracks: (albumId) => dispatch(fetchTracks(albumId)),
  editAlbumMode: (toggle) => dispatch(editAlbumMode(toggle)),
  updateTrack: (track) => dispatch(updateTrack(track))
})



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Track))
