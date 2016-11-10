import React from "react";
import {Link} from "react-router";
import ArtContainer from "../art/art_container";
import EditTrack from '../track/editTrack';
import Modal from 'react-modal';

class Track extends React.Component{
  constructor(props){
    super(props)
    this.currentAlbum = this.currentAlbum.bind(this)
    this.currentArtist = this.currentArtist.bind(this)
    this.currentTrack = this.currentTrack.bind(this)
    this.trackArt = this.trackArt.bind(this)
    this.currentTrackGrabbed = this.currentTrackGrabbed.bind(this)
    this.openModal = false
  }


  currentTrack(prop) {
    // console.log(this.props.tracks.track);
    // console.log(this.props);
    // console.log('break');
    // console.log(this.props.params.trackId);
    // console.log(Object.keys(this.props.tracks.tracks));

      if (Object.keys(this.props.tracks.tracks).length !== 0 &&
      Object.keys(this.props.tracks.tracks).includes(this.props.params.trackId)){
        return this.props.tracks.tracks[this.props.params.trackId][prop]
    }
  }

  currentTrackObject(){
    if (Object.keys(this.props.tracks.tracks).length !== 0 &&
    Object.keys(this.props.tracks.tracks).includes(this.props.params.trackId)){
      return this.props.tracks.tracks[this.props.params.trackId]
    }
  }

  currentAlbum(prop) {
    // debugger
    if (Object.keys(this.props.albums.albums).length !== 0 &&
    Object.keys(this.props.albums.albums).includes(this.currentTrack('album_id'))){
    return this.props.albums.albums[this.currentTrack('album_id')][prop]
    }
  }

  currentArtist(prop) {
    if (Object.keys(this.props.albums.albums).length !== 0 &&
    this.currentAlbum('artist')){
    return this.currentAlbum('artist')[prop]
    }
  }

  componentWillMount(){
    // this.props.fetchAlbum(this.props.params.albumId)
    // this.props.fetchTracks(this.props.params.albumId)
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

  trackArt() {
    if (this.props.image_url){
      return this.props.image_url
    } else {
      return this.props.albums.albums[this.props.params.albumId].image_url
    }
  }
  currentTrackGrabbed() {
    // debugger
    if (Object.keys(this.props.albums.albums).length !== 0) {
      // console.log(this.props.params.trackId);
      if (Object.keys(this.props.albums.albums[this.props.params.albumId].tracks).includes(this.props.params.trackId)){
        return true
      }
    }
      return false
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
    // If not purchaseale, "Buy the Full Digital Album"
    // If purchaseable, "Purchasing Component"
    // if (this.currentTrackGrabbed()===true) {
    if(this.contentMatching(this.props.params.artistId)==false){
      return <div className="loader">Loading...</div>
    } else if(this.currentTrackObject() == undefined) {
      return <div className="loader">Loading...</div>
    }else if(this.props.editMode === true && this.isArtist.bind(this)() === true){
      return(<div className="Show">
      <EditTrack currentAlbum={this.props.currentAlbum} currentUser={this.props.currentUser}
        currentTrack={this.props.currentTrack} currentFiles={this.props.currentFiles}
         params={this.props.params} updateAlbum={this.props.updateAlbum}
        editAlbumMode={this.props.editAlbumMode} updateTrack={this.props.updateTrack}/>
      <ArtContainer image_url={this.trackArt()} editMode={true}/>
      </div>)
    }
      let featAlbumId = Object.keys(this.props.albums.albums)[0]
      let artistLink = `artist/${this.currentArtist('id')}/album/${featAlbumId}`
      let albumLink = `artist/${this.props.currentAlbum.artist.id}/album/${this.props.currentAlbum.id}`
      return(
      <div className="Show">
        <div className="Tracks">
          <h1>{this.props.currentTrack.track_name}</h1>
            <h3>from <Link to={albumLink}>{this.props.currentAlbum.album_name}</Link> by
               <Link to={artistLink}> {this.props.currentAlbum.artist.artist_name}
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
              <h4>Created by {this.props.currentAlbum.artist.artist_name}</h4>
              <br />
              <h4> {this.currentTrack('credits')}</h4>
              <br />
          </div>
          <ArtContainer image_url={this.trackArt()} />
      </div>)


  }
}

export default Track;
