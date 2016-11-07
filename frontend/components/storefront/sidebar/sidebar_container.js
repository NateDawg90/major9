import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Sidebar from './sidebar';
import {fetchAlbums, fetchArtist} from '../../../actions/album_actions';
import {fetchTracks} from '../../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  tracks: state.tracks,
  albums: state.albums,
  errors: state.errors,
})

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: (userId) => dispatch(fetchAlbums(userId)),
  fetchTracks: (albumId) => dispatch(fetchTracks(albumId)),
  fetchArtist: () => dispatch(fetchArtist(ownProps.params.artistId))
})

export default withRouter(connect(
 mapStateToProps,
 mapDispatchToProps
)(Sidebar));
