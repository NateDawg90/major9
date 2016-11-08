import {connect} from "react-redux";
import {createAlbum} from "../../../actions/album_actions";
import NewAlbum from './new_album';

const mapStateToProps = (state) => ({
  errors: state.albums.errors
})

const mapDispatchToProps = (dispatch) => ({
  createAlbum: (form) => dispatch(createAlbum(form))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewAlbum)
