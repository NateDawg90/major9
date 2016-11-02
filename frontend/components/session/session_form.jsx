import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
      username: "",
      password: ""
      },
      formType: this.props.formType
    };
    this.update = this.update.bind(this);
    this.header = this.header.bind(this);
    this.oppositeLink = this.oppositeLink.bind(this);
    this.buttonText = this.buttonText.bind(this);
  }


  header() {
    if (this.props.formType === "#/signup") {
      return (
        <div className="session-header">
        <h2> Sign Up for an Artist Account </h2>
        <h3> Already have an account? {this.oppositeLink()} </h3>
        </div>
      );
    } else if (this.props.formType === "#/login") {
      return (
        <div className="session-header">
        <h2> Account Log In </h2>
        <h3> Don't have an account? {this.oppositeLink()} </h3>
        </div>
      );
    }
  }


  oppositeLink() {
    if (this.props.formType === '#/signup') {
      return (<Link to="login"
      > Log In. </Link>);
    } else if (this.props.formType === '#/login') {
      return (<Link to="signup"
      > Sign up as an artist.</Link>);
    }
  }

  handleSubmit(e){
    // debugger
    e.preventDefault();
    this.props.processForm(this.props.formType, this.state.user);
  }

  update(property){
    return (e) => {
        this.setState({[property]: e.target.value});
    };
  }

  buttonText() {
    if (this.props.formType === '#/signup') {
      return ("Sign Up");
    } else if (this.props.formType === '#/login') {
      return ("Log In");
    }
  }

  render() {
    // debugger;
    console.log(this.state);
    let errors = this.props.errors.map((error, index) => (
      <h3 className="error">{error}</h3>
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
              <input onChange={this.update('username')} placeholder="Username"/>
              <br />
              <br />
              <input onChange={this.update('password')} placeholder="Password"/>
              <br />
              {errors}
              <br />

              <button>{this.buttonText()}</button>
            </form>
            <br/>

          </div>
      </div>
      );
    }
  }
}

export default SessionForm;
