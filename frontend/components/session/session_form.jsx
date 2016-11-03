import React from 'react';
import { Link } from 'react-router';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import Modal from 'react-modal';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      formType: location.hash,
      modalOpen: false
    };
    this.update = this.update.bind(this);
    this.header = this.header.bind(this);
    this.oppositeLink = this.oppositeLink.bind(this);
    this.buttonText = this.buttonText.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.userErrors = [];
    this.passErrors = [];

  }

  handleClick() {
    this.setState({modalOpen: true});
  }

  onModalClose() {
    this.setState({modalOpen: false});

  }

  header() {
    if (this.state.formType === "#/signup") {
      return (
        <div className="session-header">
        <h2> Sign Up for an Artist Account </h2>
        <h3> Already have an account? {this.oppositeLink()} </h3>
        </div>
      );
    } else if (this.state.formType === "#/login") {
      return (
        <div className="session-header">
        <h2> Account Log In </h2>
        <h3> Don't have an account? {this.oppositeLink()} </h3>
        </div>
      );
    }
  }

  changeForm() {
    this.userErrors = [];
    this.passErrors = [];
    this.props.clearErrors;
    this.handleErrors();
    this.setState({formType: (this.state.formType === "#/login" ? "#/signup" : "#/login")})
  }

  clearErrors() {
    this.props.clearErrors;
  }

  oppositeLink() {
    if (this.state.formType === '#/signup') {
      return (<Link key="login" to="/login" onClick={this.changeForm}
      > Log In. </Link>);
    } else if (this.state.formType === '#/login' ) {
      return (<Link key="signup" to="/signup" onClick={this.changeForm}
      > Sign up as an artist.</Link>);
    }
  }

  handleSubmit(e){
    // debugger
    this.clearErrors();
    console.log("I'm out here");
    e.preventDefault();
    this.props.processForm(this.state.formType, this.state)
    this.handleLogin();
  }

  handleLogin() {
    // console.log(this.props.loggedIn);
    // if (this.props.loggedIn){
    //   console.log("Why hello there.");
    // }
    this.setState({})
  }
  update(property){
    return (e) => {
        this.setState({[property]: e.target.value});
    };
  }

  componentWillReceiveProps(newProps) {

    if (newProps.currentUser) {
    this.props.router.push(`/artist/${newProps.currentUser.id}`)
    }
  }

  buttonText() {
    if (this.state.formType === '#/signup') {
      return ("Sign Up");
    } else if (this.state.formType === '#/login') {
      return ("Log In");
    }
  }

  handleErrors () {
    this.userErrors = [];
    this.passErrors = [];
    let errors = this.props.errors.forEach((error, index) => {
      if (error[0] === 'U') {
      this.userErrors.push(<h3 key={index} className="error">{error}</h3>)
      } else {
      this.passErrors.push(<h3 key={index+1} className="error">{error}</h3>)
      }
    });
  }

  render() {
    this.handleErrors();
    if (this.props.loggedIn) {
      return (
        <div>What's Up</div>
      )
      // console.log("I am logged in maybe.");
      // this.props.router.push('artist/1')
    } else {
      return (
        <div>
          <nav className="navbar">
            <ul>
              <Link to="/signup" onClick={this.handleClick} className="navbar-link"><li>Sign Up</li></Link>
              <Link to="/login" onClick={this.handleClick} className="navbar-link"><li>Log In</li></Link>
              <Link to="/artist/1" onClick={this.props.guestLogin} className="navbar-link"><li>Guest Login</li></Link>
            </ul>
          </nav>
          <Modal>
          <div className="session">
            <div className="session-parts">
              {this.header()}
              <br />
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input onChange={this.update('username')} placeholder=" Username"/>
                <br />
                {this.userErrors}
                <br />
                <input type="password" onChange={this.update('password')} placeholder=" Password"/>
                <br />
                {this.passErrors[0]}
                <br />

                <button className = "session-parts">{this.buttonText()}</button>
              </form>
              <br/>
            </div>
          </div>
          </Modal>
        </div>
      );
    }
  }
}

export default withRouter(SessionForm);
