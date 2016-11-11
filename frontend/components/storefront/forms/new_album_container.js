import {connect} from "react-redux";
import {createAlbum, receiveAlbumErrors} from "../../../actions/album_actions";
import {receiveErrors} from '../../../actions/session_actions';
import NewAlbum from './new_album';

const mapStateToProps = (state, ownProps) => ({
  errors: state.albums.errors
})

const mapDispatchToProps = (dispatch) => ({
  createAlbum: (form) => dispatch(createAlbum(form)),
  clearErrors: (blank) => {dispatch(receiveAlbumErrors(blank))}

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewAlbum)
