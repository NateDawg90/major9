import {connect} from 'react-redux';
import Track from './track';
import {fetchTracks} from '../../../actions/track_actions';
import {withRouter} from 'react-router'
const mapStateToProps = (state, ownProps) => ({
  albums: state.albums,
  tracks: state.tracks,
})



export default withRouter(connect(
  mapStateToProps,
)(Track))
