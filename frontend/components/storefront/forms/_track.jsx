import React from 'react';

class NewTrack extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      track_name: "",
      price: "",
      release_date: "",
      description: "",
      image_url: "",
      credits: ""
    }
      this.nameError = []
      this.priceError = []
      this.dateError = []
      this.update = this.update.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleErrors = this.handleErrors.bind(this)
  }

  handleErrors () {
    this.nameError = [];
    this.dateError = [];
    this.priceError = [];
    console.log(this.props.errors);
    let errors = this.props.errors.forEach((error, index) => {
      if (error[0] === 'A') {
      this.nameError.push(<h3 key={`${index}A`} className="error">{error}</h3>)
    } else if (error[0] === 'R'){
      this.dateError.push(<h3 key={`${index}R`} className="error">Release Date is invalid.</h3>)
    } else if (error[0] === 'P'){
      this.priceError.push(<h3 key={`${index}P`} className="error">{error}</h3>)
    }
    });
  }

  update(property){
    return (e) => {
        this.setState({[property]: e.target.value});
        console.log(`${property} : ${e.target.value}`);
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.clearErrors([""]);
    this.nameError = [];
    this.dateError = [];
    this.priceError = [];
    this.props.createTrack(this.props.currentAlbumId, this.state)
  }

  render() {
    this.handleErrors();

    return(
      <div className="albumForm">
        <h2>Add a Track</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="input" onChange={this.update('track_name') }
              placeholder="Track Name"/>
          <br />
          {this.nameError[0]}
          <br />
          <input type="input" onChange={this.update('price')}
            placeholder="Price"/>
          <br />
          {this.priceError[0]}
          <br />
          <input type="input" onChange={this.update('release_date')}
            placeholder="Release Date"/>
          <br />
          {this.dateError[0]}
          <br />
          <textArea placeholder="Description" onChange={this.update('description')}/>
          <br />
          <br />
          <input type="input" onChange={this.update('image_url')}
            placeholder="Image URL"/>
          <br />
          <br />
          <input type="input" onChange={this.update('credits')}
            placeholder="Credits"/>
          <br />
          <br />
          <h2>Upload Track Component</h2>
          <button>Create Track</button>
          <br />
        </form>
      </div>
    )


   }
}

export default NewTrack;
