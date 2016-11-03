import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      formType: location.hash
    };
    this.update = this.update.bind(this);
    this.header = this.header.bind(this);
    this.oppositeLink = this.oppositeLink.bind(this);
    this.buttonText = this.buttonText.bind(this);
    this.changeForm = this.changeForm.bind(this);
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
      this.setState({formType: (this.state.formType === "#/login" ? "#/signup" : "#/login")})
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
    e.preventDefault();
    this.props.processForm(this.state.formType, this.state);
  }

  update(property){
    return (e) => {
        this.setState({[property]: e.target.value});
    };
  }

  buttonText() {
    if (this.state.formType === '#/signup') {
      return ("Sign Up");
    } else if (this.state.formType === '#/login') {
      return ("Log In");
    }
  }

  render() {
    // debugger;
    console.log(this.state.formType);
    let errors = this.props.errors.map((error, index) => (
      <h3 key="index" className="error">{error}</h3>
    ));

    if (this.props.loggedIn) {
      return (
        <div>

        </div>
      );
    } else {
      return (
        <div className="session">
          <div className="session-parts">
            {this.header()}
            <br />
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input onChange={this.update('username')} placeholder=" Username"/>
              <br />
              <br />
              <input onChange={this.update('password')} placeholder=" Password"/>
              <br />
              {errors}
              <br />

              <button className = "session-parts">{this.buttonText()}</button>
            </form>
            <br/>
          </div>
      </div>
      );
    }
  }
}

export default SessionForm;
