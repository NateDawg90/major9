import {connect} from 'react-redux';
import Art from './art';

const mapStateToProps = (state, ownProps) => ({
  image_url: ownProps.image_url
})

export default connect(
  mapStateToProps
)(Art);
