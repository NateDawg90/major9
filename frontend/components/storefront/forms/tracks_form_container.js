import {connect} from 'react-redux';
import TracksForm from './_tracks.jsx';
const mapStateToProps= (state, ownProps) => ({
  tracks: state.tracks,
  albums: state.albums,
  albumCount: state.albums.albums,
  errors: state.errors,
  currentUser: state.session.currentUser,
  editMode: state.albums.editMode
})

export default connect(

)(TracksForm)
