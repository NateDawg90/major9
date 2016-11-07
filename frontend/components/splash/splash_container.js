import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Splash from './splash';


const mapStateToProps = (state) => ({
})

export default withRouter(connect(
  mapStateToProps
)(Splash));
