import React from 'react'
import {Link} from 'react-router'
import ReactS3Uploader from 'react-s3-uploader';

class EditTrack extends React.Component {
  constructor(props) {
    super(props)
    //loop through objects
    //push into new object
    //set state to new object
    ;
    // let defaultState = this.stateMaker()
    this.state = {
      track_name: this.props.currentTrack.track_name,
      price: this.props.currentTrack.price,
      release_date: this.props.currentTrack.release_date,
      description: this.props.currentTrack.description,
      image_url: this.props.currentTrack.image_url,
      track_number: this.props.currentTrack.track_number,
      credits: this.props.currentTrack.credits,
      id: this.props.params.trackId,
      track_files: this.props.currentAlbum.track_files
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // currentTrack
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
    this.props.updateTrack(this.props.params.albumId, this.state)
    this.setState({editMode:false})
  }

  componentWillReceiveProps(nextProps){
    console.log('jQuery is');
    console.log($('.Tracks'));
    if(JSON.stringify(nextProps.currentTrack) != JSON.stringify(this.props.currentTrack)){
      this.props.editAlbumMode(false)
    }
    // console.log(nextProps);
  }
  currentFilesResult() {
    return this.props.currentFiles.map( (obj, index) => (
      <div>
      <li key={obj.id}>{index + 1}. {obj.url}</li>
      <button>Delete Track</button>
      </div>
    ))
  }

  createTrack(data) {
      debugger
  }

  handleUpload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, successObject) => {
      if(error === null) {
          let trackFileObject = {
            user_id: this.props.currentUser.id,
            track_id: this.props.currentTrack.id,
            url: successObject[0].url
          }
          this.props.uploadTrack(trackFileObject)
      }
    })
  }

  render() {
    console.log(this.props);
    let artist_name = this.props.currentUser['artist_name']
    let currentFiles = this.currentFilesResult.bind(this)()
    return(
      <div className="Tracks">
        <form className="TrackForm" onSubmit={this.handleSubmit}>
        <input className="TrackTitle" type="text"
          placeholder = "Album Name"
          onChange={this.update('track_name')}
          value={this.state.track_name} />
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
          <ul>
            <li>Current Files:</li>
            {currentFiles}
          </ul>
          <br />
          <button className="bigButton" onClick={this.handleUpload.bind(this)}>Upload Track</button>
        <br />
        <br />
        <button onClick={this.handleSubmit.bind(this)}>Save</button>
        </form>
      </div>
    )
  }


}

export default EditTrack
