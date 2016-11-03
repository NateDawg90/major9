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
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleClick() {
    this.setState({modalOpen: true});
  }

  onModalClose() {
    this.setState({modalOpen: false});

  }

  handleLogout() {
    this.onModalClose()
    this.props.logout()
  }

  render () {
  if (this.props.currentUser !== null) {
    return (
      <nav className="navbar">
        <ul >
          <li><h3>Welcome, {this.props.currentUser.username}!</h3></li>
          <Link to="/" className="navbar-link" onClick={this.handleLogout}><li>Logout</li></Link>
        </ul>
      </nav>
    );
  } else {
    return (<nav className="navbar">
      <ul>

        <Link to="/signup" onClick={this.handleClick} className="navbar-link"><li>Sign Up</li></Link>
        <Link to="/login" onClick={this.handleClick} className="navbar-link"><li>Log In</li></Link>
        <Link to="/artist/1" onClick={this.props.guestLogin} className="navbar-link"><li>Guest Login</li></Link>

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
          <div className="session-box">
            <button className="session-parts" onClick={this.onModalClose.bind(this)}>Close</button>
            <SessionFormContainer />
          </div>
        </Modal>
    </nav>
    );
    }
  };
};

export default Navbar;
