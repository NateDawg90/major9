import React from "react";
import {Link} from "react-router";
import ArtContainer from "../art/art_container";

class Track extends React.Component{
  constructor(props){
    super(props)
    this.currentAlbum = this.currentAlbum.bind(this)
    this.currentArtist = this.currentArtist.bind(this)
    this.currentTrack = this.currentTrack.bind(this)
  }


  currentTrack(prop) {
    console.log(this.props.tracks.track);
    console.log(this.props);
    console.log('break');
    console.log(this.props.params.trackId);

    console.log(Object.keys(this.props.tracks.tracks));
      if (Object.keys(this.props.tracks.tracks).length !== 0){
      return this.props.tracks.tracks[this.props.params.trackId][prop]
    }
  }

  currentAlbum(prop) {
    // debugger
    if (Object.keys(this.props.albums.albums).length !== 0){
    return this.props.albums.albums[this.currentTrack('album_id')][prop]
    }
  }

  currentArtist(prop) {
    if (Object.keys(this.props.albums.albums).length !== 0){
    return this.currentAlbum('artist')[prop]
    }
  }

  // <ol>
  //   {this.displayTracks()}
  // </ol>
  // <br />
  // <h4>released {this.currentAlbum('release_date')} </h4>
  // <br />
  // <h4>{this.currentAlbum('description')}</h4>
  // <br />
  // <h4>Created by {this.currentArtist('username')}</h4>
  // <br />
  // <h4> {this.currentAlbum('credits')}</h4>
  // <br />

  render() {
    // debugger
    // If not purchaseale, "Buy the Full Digital Album"
    // If purchaseable, "Purchasing Component"
    let featAlbumId = Object.keys(this.props.albums.albums)[0]
    let artistLink = `artist/${this.currentArtist('id')}/album/${featAlbumId}`
    let albumLink = `artist/${this.currentArtist('id')}/album/${this.currentAlbum("id")}`
    return(
    <div className="Show">
      <div className="Tracks">
        <h1>{this.currentTrack('track_name')}</h1>
          <h3>from <Link to={albumLink}>{this.currentAlbum("album_name")}</Link> by <Link to={artistLink}> {this.currentArtist('username')}
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
        <ArtContainer image_url={this.props.image_url} />
    </div>
    )
  }
}

export default Track;
