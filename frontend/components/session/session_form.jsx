import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.update = this.update.bind(this);
    this.header = this.header.bind(this);
    this.oppositeLink = this.oppositeLink.bind(this);
  }


  header() {
    if (this.props.formType === "#/signup") {
      return "Sign Up";
    } else if (this.props.formType === "#/login") {
      return "Log In";
    }
  }

  oppositeLink() {
    if (this.props.formType === '#/signup') {
      return (<Link to="login" > Click to Log In </Link>);
    } else if (this.props.formType === '#/login') {
      return (<Link to="signup"> Click to Sign Up</Link>);
    }
  }

  handleSubmit(e){
    // debugger
    e.preventDefault();
    this.props.processForm(this.props.formType, this.state);
  }

  update(property){
    return (e) => {
        this.setState({[property]: e.target.value});
    };
  }



  render() {
    // debugger;
    let errors = this.props.errors.map((error, index) => (
      <h4>{error}</h4>
    ));

    if (this.props.loggedIn) {
      return (
        <div>

        </div>
      );
    } else {
      return (
        <div>
          <h1>{this.header()}</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Username </label>
            <input onChange={this.update('username')}/>
            <br />
            <label>Password </label>
            <input onChange={this.update('password')}/>
            <br />
            {errors}
            <button>Submit</button>
          </form>
          <br/>
          {this.oppositeLink()}
        </div>
      );
    }
  }
}

export default SessionForm;
