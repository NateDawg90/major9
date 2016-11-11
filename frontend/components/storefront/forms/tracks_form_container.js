import {connect} from 'react-redux';
import TracksForm from './_tracks.jsx';
import {receiveTrackErrors} from '../../../actions/track_actions'
const mapStateToProps= (state, ownProps) => {
  // debugger
  return{
  tracks: state.tracks.tracks,
  albums: state.albums,
  albumCount: state.albums.albums,
  errors: state.tracks.errors,
  currentUser: state.session.currentUser,
  editMode: state.albums.editMode
}}

const mapDispatchToProps = (dispatch) => ({
  clearTrackErrors: (blank) => dispatch(receiveTrackErrors(blank))
})

export default connect(
mapStateToProps,
mapDispatchToProps
)(TracksForm)
