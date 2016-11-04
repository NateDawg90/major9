import React from "react";
import {Link} from "react-router";

class Track extends React.Component{
  constructor(props){
    super(props)
    this.currentAlbum = this.currentAlbum.bind(this)
    this.currentArtist = this.currentArtist.bind(this)
    this.currentTrack = this.currentTrack.bind(this)
  }


  currentTrack(prop) {
    if (this.props.track !== undefined){
      return this.props.track[prop]
    }
  }

  // componentWillMount() {
  //   console.log(this.props.params)
  //   this.props.fetchTracks(this.props);
  // }

  currentAlbum(prop) {
    if (this.props.album !== undefined){
    return this.props.album[prop]
    }
  }

  currentArtist(prop) {
    if (this.props.album !== undefined){
    return this.props.album.artist[prop]
    }
  }


  render() {
    // debugger
    let featAlbumId = Object.keys(this.props.albums.albums)[0]
    let artistLink = `/artist/${this.currentArtist('id')}/album/${featAlbumId}`
    return(
    <div className="Tracks">
      <h1>{this.currentTrack('track_name')}</h1>
      <h3>by <Link to={artistLink}>
        {this.currentArtist('username')}
      </Link></h3>
      <h2> Song Player goes here</h2>
      <h3>Buy the Full Digital Album</h3>
      <br/>
      <h2> Purchasing Component </h2>
      <h2>Buy Now {this.currentTrack('price')}</h2>
      <br />
      <h4>released {this.currentTrack('release_date')} </h4>
      <br />
      <h4>{this.currentTrack('description')}</h4>
      <br />
      <h4>Created by {this.currentArtist('username')}</h4>
      <br />
      <h4> {this.currentTrack('credits')}</h4>
      <br />
    </div>
    )
  }
}

export default Track;
