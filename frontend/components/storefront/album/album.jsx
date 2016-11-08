import React from "react";
import {Link} from "react-router";
import TrackContainer from "../track/track_container";
import ArtContainer from "../art/art_container";
import EditAlbum from "./editAlbum";

class Album extends React.Component{
  constructor(props){
    super(props)

    this.displayTracks = this.displayTracks.bind(this)
    this.currentAlbum = this.currentAlbum.bind(this)
    this.currentArtist = this.currentArtist.bind(this)
    this.handleNameClick = this.handleNameClick.bind(this)
    this.contentMatching = this.contentMatching.bind(this)
    this.currentAlbumObject = this.currentAlbumObject.bind(this)

  }

  displayTracks() {
    let obj;
    let tracks = [];

    if (Object.keys(this.props.albums.albums).length !== 0) {
      obj = this.props.albums.albums[this.props.params.albumId].tracks

    }

    for(var prop in obj){
      let trackLink = `/artist/${this.props.params.artistId}/album/${this.props.params.albumId}/track/${obj[prop].id}`
      tracks.push(
        <div className="TrackListItem-box" key={`Box${prop}`}>
          <ul className="TrackListItem">
            <li className="trackNumber" key={`Track_${prop}`}>
              {obj[prop].track_number}.
            </li>
            <li className="trackListLink" key={prop}>
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

    if (Object.keys(this.props.albums.albums).length !== 0){
    return this.props.albums.albums[this.props.params.albumId][prop]
    }
  }

  currentAlbumObject() {
    if (Object.keys(this.props.albums.albums).length !== 0){
    return this.props.albums.albums[this.props.params.albumId]
    }
  }

  currentArtist(prop) {
    if (Object.keys(this.props.albums.albums).length !== 0){
    return this.props.albums.albums[this.props.params.albumId].artist[prop]
    }
    return undefined;
  }

  // {this.props.children}

  handleNameClick(albumId) {
    this.props.fetchTracks(albumId)
  }

  contentMatching(artistId){
    // debugger
    if (Object.keys(this.props.albums.albums).length > 1){
      return this.props.albums.albums[Object.keys(this.props.albums.albums)[0]].artist.id == artistId
    } else if (Object.keys(this.props.albums.albums).length == 1) {
      if (Object.keys(this.props.albums.albums).includes('artist_id')) {
      return this.props.albums.albums.artist_id == artistId
      } else {
      return this.props.albums.albums[Object.keys(this.props.albums.albums)[0]].artist.id == artistId
      }
    }
    return false
  }

  isArtist() {
    if(this.props.currentUser) {
      if(this.props.currentUser.id == this.props.params.artistId)
        return true
    }
    return false
  }

  render() {
    // debugger
    if (this.props.children) {
      return(
        <TrackContainer key='trackContainer'trackId={this.props.params.trackId}/>
      );
    } else if(this.contentMatching(this.props.params.artistId)==false){
      return <div className="loader">Loading...</div>
    } else if(this.currentAlbumObject() == undefined) {
      return <div className="loader">Loading...</div>
    }else if(this.props.editMode === true && this.isArtist.bind(this)() === true){
      return(<div className="Show">
      <EditAlbum currentAlbum={this.currentAlbumObject()} currentUser={this.props.currentUser}
        tracks={this.props.albums.albums[this.props.params.albumId].tracks
        } params={this.props.params}/>
      <ArtContainer image_url={this.currentAlbum('image_url')} editMode={true}/>
      </div>)

    }{
    let featAlbumId = Object.keys(this.props.albums.albums)[0]
    let artistLink =`/artist/${this.currentArtist('id')}/album/${featAlbumId}`

    return(
    <div className="Show">
      <div className="Tracks">
        <h1>{this.currentAlbum('album_name')}</h1>
        <h3>by <Link to={artistLink} onClick={this.handleNameClick}>
          {this.currentArtist('artist_name')}
        </Link></h3>
        <h2> Song Player goes here</h2>
        <h3>Digital Album</h3>
        <h4>Includes unlimited streaming via the free Major9 app, plus
        high-quality download in MP3.</h4>
        <br/>
        <h2> Purchasing Component </h2>
        <h2>Buy Now {this.currentAlbum('price')}</h2>
          {this.displayTracks()}
        <br />
        <h4>released {this.currentAlbum('release_date')} </h4>
        <br />
        <h4>{this.currentAlbum('description')}</h4>
        <br />
        <h4>Created by {this.currentArtist('artist_name')}</h4>
        <br />
        <h4> {this.currentAlbum('credits')}</h4>
        <br />
      </div>
      <ArtContainer image_url={this.currentAlbum('image_url')}/>
    </div>
  )
  }
  }
}

export default Album;
