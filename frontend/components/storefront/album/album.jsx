import React from "react";
import {Link} from "react-router";
import TrackContainer from "../track/track_container";

class Album extends React.Component{
  constructor(props){
    super(props)
    this.displayTracks = this.displayTracks.bind(this)
    this.currentAlbum = this.currentAlbum.bind(this)
    this.currentArtist = this.currentArtist.bind(this)
  }

  displayTracks() {

    let obj = this.props.tracks.tracks
    let tracks = []

    for(var prop in obj){
      let trackLink = `/artist/${this.currentArtist('id')}/album/${this.currentAlbum('id')}/track/${prop}`

      tracks.push(
        <div className="TrackListItem-box" key={prop}>
          <ul className="TrackListItem">
            <li className="trackNumber" key={`Track_${prop}`}>
              {obj[prop].track_number}.
            </li>
            <li className="trackListLink" key={`Track_link_${prop}`}>
              <Link to={trackLink}>{obj[prop].track_name}</Link>
            </li>
            <li className="trackLength" key={`Length_${prop}`}>
              0:00
            </li>
          </ul>
          <li className="trackHoverLink" key={`hover${prop}`}>
            <Link to={trackLink}>info</Link>
          </li>
       </div>
     )
    }
    //Add track lengths when we get to downloadable files
    return tracks
  }

  componentWillMount() {
    this.props.fetchTracks(this.props.params.albumId);
  }

  currentAlbum(prop) {
    // debugger
    if (Object.keys(this.props.albums.albums).length !== 0 &&
  this.props.albums.albums.hasOwnProperty(this.props.params.albumId)){
    return this.props.albums.albums[this.props.params.albumId][prop]
  }
  }

  currentArtist(prop) {
    // debugger
    if (Object.keys(this.props.albums.albums).length !== 0 &&
    this.props.albums.albums.hasOwnProperty(this.props.params.albumId)){

    return this.props.albums.albums[this.props.params.albumId].artist[prop]
    }
  }

  currentArtistObject() {
    if (Object.keys(this.props.albums.albums).length !== 0){
    return this.props.albums.albums[this.props.params.albumId].artist
    }
  }



  // {this.props.children}

  render() {
    // debugger
    if (this.props.children) {
      // debugger
      return(
      <div className ="track">
        <TrackContainer trackId={this.props.params.trackId}
          album={this.props.albums.albums[this.props.params.albumId]}/>
      </div>
      );
    } else {
    let featAlbumId = Object.keys(this.props.albums.albums)[0]
    let artistLink = `/artist/${this.currentArtist('id')}/album/${featAlbumId}`
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
      <div>
        {this.displayTracks()}
      </div>
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
}

export default Album;
