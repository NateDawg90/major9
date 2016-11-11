import React from 'react'
import TracksFormContainer  from '../forms/tracks_form_container';

class EditAlbum extends React.Component {
  constructor(props) {
    super(props)
    //loop through objects
    //push into new object
    //set state to new object
    ;
    // let defaultState = this.stateMaker()
    this.state = {
      album_name: this.props.currentAlbum.album_name,
      price: this.props.currentAlbum.price,
      release_date: this.props.currentAlbum.release_date,
      description: this.props.currentAlbum.description,
      image_url: this.props.currentAlbum.image_url,
      credits: this.props.currentAlbum.credits,
      id: this.props.params.albumId
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // stateMaker() {
  //   let state = {}
  //   let obj = this.props.tracks
  //   for(var prop in obj){
  //     state.prop = obj.prop
  //   }
  //   state.album = this.props.currentAlbum
  //   return state
  // }

  update(property) {
    return e => {
      console.log(e.target.value);
      this.setState({[property]: e.target.value})
    }
  }

  handleSubmit() {
    this.props.updateAlbum(this.state)
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    console.log(this.props.params.albumId);
    let artist_name = this.props.currentUser['artist_name']
    return(
      <div className="Tracks">
        <form className="AlbumForm" onSubmit={this.handleSubmit}>
        <input className="AlbumTitle" type="text"
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
          <TracksFormContainer 
             currentAlbum={this.state}
             onChange={this.update('price')}
             params={this.props.params}
             router={this.props.router}
             editAlbumMode={this.props.editAlbumMode}
             props={this.props}
             deleteTrack={this.props.deleteTrack}/>
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

export default EditAlbum
