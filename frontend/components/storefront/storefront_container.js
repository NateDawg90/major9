import {connect} from 'react-redux';
import {fetchAlbums} from '../../actions/album_actions';
import storeFront from './storefront';
const mapStateToProps = (state) => ({
  tracks: state.tracks,
  albums: state.albums,
  errors: state.errors
})

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: (userId) => dispatch(fetchAlbums(userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(storeFront)
