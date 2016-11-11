import {connect} from 'react-redux';
import Track from './track';
import {fetchTracks, updateTrack} from '../../../actions/track_actions';
import {fetchAlbum, editAlbumMode} from '../../../actions/album_actions';
import {uploadTrack} from '../../../actions/upload_actions';
import {withRouter} from 'react-router'
import {playTracks, pauseTrack} from '../../../actions/player_actions';

const mapStateToProps = (state, ownProps) => {
  let tracks = state.tracks.tracks
  let trackFiles = state.albums.albums[ownProps.params.albumId].track_files
  let currentTrackResult = Object.keys(tracks).filter((objKey) => {
    return objKey == ownProps.params.trackId
  })[0]
  let currentFilesResult = trackFiles.filter((obj) => {
    // debugger
    return obj.track_id == ownProps.params.trackId
  })

  return {
  albums: state.albums,
  tracks: state.tracks,
  editMode: state.albums.editMode,
  currentUser: state.session.currentUser,
  currentAlbum: state.albums.albums[ownProps.params.albumId],
  currentTrack: state.tracks.tracks[ownProps.params.trackId],
  currentFiles: currentFilesResult,
  imageUrl: state.tracks.tracks[ownProps.params.trackId].image_url
}}

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (userId) => dispatch(fetchAlbum(userId)),
  fetchTracks: (albumId) => dispatch(fetchTracks(albumId)),
  editAlbumMode: (toggle) => dispatch(editAlbumMode(toggle)),
  updateTrack: (albumId,track) => dispatch(updateTrack(albumId,track)),
  playTracks: (track, trackFiles) => dispatch(playTracks(track, trackFiles)),
  uploadTrack: (track) => dispatch(uploadTrack(track))
})



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Track))
