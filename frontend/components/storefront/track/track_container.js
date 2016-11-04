import {connect} from 'react-redux';
import Track from './track';
import {fetchTracks, fetchAlbum} from '../../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  return{
  albums: state.albums,
  tracks: state.tracks,
  track: state.tracks.tracks[ownProps.trackId],
  trackId: ownProps.trackId,
  params: ownProps.params
}};

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: (albumId) => dispatch(fetchTracks(albumId)),
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Track)
