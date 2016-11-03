import {connect} from 'react-redux';
import Album from './album';
import {fetchTracks} from '../../../actions/track_actions';

const mapStateToProps = (state) => ({
  albums: state.albums,
  tracks: state.tracks
})

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: (albumId) => dispatch(fetchTracks(albumId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album)
