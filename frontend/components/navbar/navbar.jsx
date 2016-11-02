import React from 'react';
import { Link } from "react-router";
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';

class Navbar extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({modalOpen: true});
  }

  onModalClose() {
    this.setState({modalOpen: false});

  }
  render () {
  if (this.props.currentUser !== null) {
    return (
      <nav className="navbar">
        <ul >

          <li><h3>Welcome, {this.props.currentUser.username}!</h3></li>
          <li><Link to="/" onClick={this.props.logout}>Logout</Link></li>

        </ul>
      </nav>
    );
  } else {
    return (<nav className="navbar">
      <ul>

        <li><Link to="/signup" onClick={this.handleClick} className="navbar-link">Sign Up</Link></li>
        <li><Link to="/login" onClick={this.handleClick} className="navbar-link">Log In</Link></li>
        <li><Link to="/" onClick={this.props.guestLogin} className="navbar-link">Guest Login</Link></li>

      </ul>

      <Modal
         isOpen={this.state.modalOpen}
         onRequestClose={this.onModalClose.bind(this)}
         style = {{content :{
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
            }
          }
        }
        >
        <button onClick={this.onModalClose.bind(this)}>Close</button>
        <SessionFormContainer />
      </Modal>
    </nav>
    );
    }
  };
};

export default Navbar;
