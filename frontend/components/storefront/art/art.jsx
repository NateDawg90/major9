import React from 'react';
import merge from 'lodash/merge'
// <img src={this.props.image_url} />
class Art extends React.Component {
  constructor(props) {
    super(props)
    this.state = {image_url: this.props.image_url}
    this.handleUpload = this.handleUpload.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.props.params.trackId !== undefined){
      this.props.updateTrack(this.props.params.albumId,
        merge({},this.state, {id:this.props.params.trackId}))
    } else {
      this.props.updateAlbum(merge({},this.state, {id:this.props.params.albumId}))
    }
  }

  handleUpload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, successObject) => {
      if(error === null) {
        console.log('Im Here');
          this.setState({image_url:successObject[0].url});
      }
    })
  }

  update(e){
    this.setState({image_url:e.target.value})
  }

  render() {
    if (this.props.editMode === true) {
      return(
        <div>
          <div className = "Image EditImage">
            <img className="ShowArt" src={this.props.image_url} />
            <br/>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <br/>
            <br/>
            <input type="text" placeholder="Change Image URL"
              onChange={this.update.bind(this)} value={this.state.image_url}/>
            <button onClick={this.handleUpload}>Upload Image</button>
            <br/>
            <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </form>

          </div>
        </div>
      )
    }
    return(
      <div className = "Image">
        <img className="ShowArt" src={this.props.image_url} />
      </div>
    )
  }
}

export default Art
