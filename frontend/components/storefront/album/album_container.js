import {connect} from 'react-redux';
import Album from './album';
import {fetchTracks, deleteTrack} from '../../../actions/track_actions';
import {updateAlbum, editAlbumMode} from '../../../actions/album_actions';
import {withRouter} from 'react-router'
import {playTracks, pauseTrack} from '../../../actions/player_actions';

const mapStateToProps = (state, ownProps) => ({
  albums: state.albums,
  tracks: state.tracks.tracks,
  editMode: state.albums.editMode,
  currentUser: state.session.currentUser,
  currentAlbum: state.albums.albums[ownProps.params.albumId]

})

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: (albumId) => dispatch(fetchTracks(albumId)),
  updateAlbum: (album) => dispatch(updateAlbum(album)),
  editAlbumMode: (toggle) => dispatch(editAlbumMode(toggle)),
  playTracks: (track, trackFiles) => dispatch(playTracks(track, trackFiles)),
  pauseTrack: () => dispatch(pauseTrack()),
  deleteTrack: (albumId, trackId) => dispatch(deleteTrack(albumId, trackId))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Album))
