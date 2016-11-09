import {connect} from 'react-redux';
import Art from './art';
import {updateTrack} from '../../../actions/track_actions'
import {updateAlbum} from '../../../actions/album_actions'
import {withRouter} from 'react-router'

const mapStateToProps = (state, ownProps) => ({
  image_url: ownProps.image_url
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateTrack: (albumId, track) => dispatch(updateTrack(albumId, track)),
  updateAlbum: (albumId, album) => dispatch(updateAlbum(albumId, album))
})
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Art));
