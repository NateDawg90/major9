import React from 'react'

class EditTrack extends React.Component {
  constructor(props) {
    super(props)
    //loop through objects
    //push into new object
    //set state to new object
    ;
    // let defaultState = this.stateMaker()
    console.log(this.props);
    this.state = {
      album_name: this.props.currentTrack.track_name,
      price: this.props.currentTrack.price,
      release_date: this.props.currentTrack.release_date,
      description: this.props.currentTrack.description,
      image_url: this.props.currentTrack.image_url,
      credits: this.props.currentTrack.credits,
      id: this.props.params.albumId
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  currentTrack
  // stateMaker() {
  //   let state = {}
  //   let obj = this.props
  //   for(var prop in obj){
  //     state.prop = obj.prop
  //   }
  //   state.album = this.props.currentTrack
  //   return state
  // }

  update(property) {
    return e => {
      console.log(e.target.value);
      this.setState({[property]: e.target.value})
    }
  }

  handleSubmit() {
    this.props.updateTrack(this.state)
  }

  render() {

    let artist_name = this.props.currentUser['artist_name']
    return(
      <div className="Tracks">
        <form className="TrackForm" onSubmit={this.handleSubmit}>
        <input className="TrackTitle" type="text"
          placeholder = "Album Name"
          onChange={this.update('album_name')}
          value={this.state.album_name} />
        <h2> Song Player goes here</h2>
        <h3>Digital Album</h3>
        <h4>Includes unlimited streaming via the free Major9 app, plus
        high-quality download in MP3.</h4>
        <br/>
        <h2> Purchasing Component </h2>
        <h2>Buy Now {this.state.price}</h2>
        <br />
        <input type="text" placeholder="Release Date"
          onChange={this.update('release_date')}
           value={this.state.release_date} />
        <br />
        <br />
          <textArea
            className="EditDescription"
            value={this.state.description}
            onChange={this.update('description')}
            placeholder="Description" />
        <br />
          <br/ >
          <input type="text"
            defaultValue={this.state.credits}
            onChange={this.update('credits')}
            placeholder="Credits"/>
        <br />
        <br />
        <button>Save</button>
        </form>
      </div>
    )
  }
}

export default EditTrack
