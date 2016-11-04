import React from "react";
import {Link} from "react-router";

class Album extends React.Component{
  constructor(props){
    super(props)
    this.displayTracks = this.displayTracks.bind(this)
    this.currentAlbum = this.currentAlbum.bind(this)
    this.currentArtist = this.currentArtist.bind(this)
  }

  displayTracks() {

    console.log(this.props);
    let obj = this.props.tracks.tracks
    let tracks = []
    for(var prop in obj){
      tracks.push(<li className="trackListItem"
       key={prop}>{obj[prop].track_number}. {obj[prop].track_name}</li>)
    }
    //Add track lengths when we get to downloadable files
    return tracks
  }

  componentWillMount() {
    this.props.fetchTracks(this.props.params.albumId);
  }

  currentAlbum(prop) {
    // debugger
    if (Object.keys(this.props.albums.albums).length !== 0){
    return this.props.albums.albums[this.props.params.albumId][prop]
    }
  }

  currentArtist(prop) {
    if (Object.keys(this.props.albums.albums).length !== 0){
    return this.props.albums.albums[this.props.params.albumId].artist[prop]
    }
  }


  render() {
    // debugger
    let artistLink = `artist/${this.currentArtist('id')}`
    return(
    <div className="Tracks">
      <h1>{this.currentAlbum('album_name')}</h1>
      <h3>by <Link to={artistLink}>
        {this.currentArtist('username')}
      </Link></h3>
      <h2> Song Player goes here</h2>
      <h3>Digital Album</h3>
      <h4>Includes unlimited streaming via the free Major9 app, plus
      high-quality download in MP3.</h4>
      <br/>
      <h2> Purchasing Component </h2>
      <h2>Buy Now {this.currentAlbum('price')}</h2>
      <ol>
        {this.displayTracks()}
      </ol>
      <br />
      <h4>released {this.currentAlbum('release_date')} </h4>
      <br />
      <h4>{this.currentAlbum('description')}</h4>
      <br />
      <h4>Created by {this.currentArtist('username')}</h4>
      <br />
      <h4> {this.currentAlbum('credits')}</h4>
      <br />



    </div>
  )
  }
}

export default Album;
