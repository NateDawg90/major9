import {connect} from 'react-redux';
import {fetchAlbums, fetchArtist} from '../../actions/album_actions';
import {fetchTracks} from '../../actions/track_actions';

import storeFront from './storefront';
const mapStateToProps = (state, ownProps) => ({
  tracks: state.tracks,
  albums: state.albums,
  errors: state.albums.errors,
  artist: state.albums.albums.artist,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch,ownProps) => ({
  fetchAlbums: (userId) => dispatch(fetchAlbums(userId)),
  fetchTracks: (albumId) => dispatch(fetchTracks(albumId)),
  fetchArtist: () => dispatch(fetchArtist(ownProps.params.artistId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(storeFront)
