import {connect} from 'react-redux';
import Album from './album';
import {fetchTracks} from '../../../actions/track_actions';
import {fetchAlbums} from '../../../actions/album_actions';

const mapStateToProps = (state) => ({
  albums: state.albums,
  tracks: state.tracks
})

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: (albumId) => dispatch(fetchTracks(albumId)),
  fetchAlbums: (userId) => dispatch(fetchAlbums(userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album)
