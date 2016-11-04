import {connect} from 'react-redux';
import Track from './track';
import {fetchTracks} from '../../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  albums: state.albums,
  tracks: state.tracks,
  trackId: ownProps.trackId
})



export default connect(
  mapStateToProps,
)(Track)
