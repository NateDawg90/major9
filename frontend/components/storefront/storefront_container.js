import {connect} from 'react-redux';
import {fetchAlbums} from '../../actions/album_actions';
import {fetchTracks} from '../../actions/track_actions';

import storeFront from './storefront';
const mapStateToProps = (state) => ({
  tracks: state.tracks,
  albums: state.albums,
  errors: state.errors
})

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: (userId) => dispatch(fetchAlbums(userId)),
  fetchTracks: (albumId) => dispatch(fetchTracks(albumId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(storeFront)
