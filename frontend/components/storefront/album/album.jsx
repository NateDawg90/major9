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
      <h2>by <Link to={artistLink}>
        {this.currentArtist('username')}
      </Link></h2>
      <ol>
        {this.displayTracks()}
      </ol>
    </div>
  )
  }
}

export default Album;
