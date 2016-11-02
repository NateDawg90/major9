import {connect} from 'react-router';


const mapStateToProps = (state) => ({
  tracks: state.tracks,
  albums: state.albums,
  errors: state.errors
})

const mapDispatchToProps = (dispatch) => ({
  
})
