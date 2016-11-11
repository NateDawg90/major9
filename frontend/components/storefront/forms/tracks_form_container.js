import {connect} from 'react-redux';
import TracksForm from './_tracks.jsx';
const mapStateToProps= (state, ownProps) => {
  // debugger
  return{
  tracks: state.tracks.tracks,
  albums: state.albums,
  albumCount: state.albums.albums,
  errors: state.errors,
  currentUser: state.session.currentUser,
  editMode: state.albums.editMode
}}

export default connect(
mapStateToProps
)(TracksForm)
