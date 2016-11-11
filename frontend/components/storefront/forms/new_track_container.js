import {connect} from "react-redux";
import {createTrack} from "../../../actions/track_actions";
import {receiveErrors} from '../../../actions/session_actions';
import NewTrack from './_track';

const mapStateToProps = (state, ownProps) => {
  return{
  errors: state.albums.errors,
  currentAlbumId: ownProps.params.albumId,
  tracks: state.tracks.tracks
}
}

const mapDispatchToProps = (dispatch) => ({
  createTrack: (albumId, form) => dispatch(createTrack(albumId, form)),
  clearErrors: (blank) => {dispatch(receiveErrors(blank))}

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTrack)
