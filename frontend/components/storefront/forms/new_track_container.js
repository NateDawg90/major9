import {connect} from "react-redux";
import {createTrack, receiveTrackErrors} from "../../../actions/track_actions";
import {receiveErrors} from '../../../actions/session_actions';
import NewTrack from './_track';

const mapStateToProps = (state, ownProps) => {
  return{
  errors: state.tracks.errors,
  currentAlbumId: ownProps.params.albumId,
  tracks: state.tracks.tracks
}
}

const mapDispatchToProps = (dispatch) => ({
  createTrack: (albumId, form) => dispatch(createTrack(albumId, form)),
  clearErrors: (blank) => {dispatch(receiveTrackErrors(blank))}

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTrack)
