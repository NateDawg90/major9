import React from 'react'
import ArtContainer from "../art/art_container";

class Sidebar extends React.Component {
  constructor(props){
    super(props)
    this.albums = this.albums.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.currentArtist = this.currentArtist.bind(this)
  }

  parseAlbums() {
    const albumNames = []
    let obj = this.props.albums.albums
    // console.log(this.props.albums.albums);
    // console.log(this.props.children);
      for (var prop in obj ) {
        // debugger
        if(obj[prop].image_url) {
        albumNames.push(
          <div className="sidebarItemBox" key={`${prop}`}>
          <img className="sidebarItem" src={obj[prop].image_url} onClick={this.handleClick(prop)}key={prop}/>
          <h3 className="sidebarSmallName" onClick={this.handleClick(prop)}key={`name${prop}`}> {obj[prop].album_name} </h3>
          <h4 key={`date${prop}`}> {obj[prop].release_date} </h4>
          </div>)
        } else {
        albumNames.push(
          <div className="sidebarItemBox" key={`${prop}`}>
          <h2 className="sidebarItem" onClick={this.handleClick(prop)}key={prop}>{obj[prop].album_name}</h2>
          <h3 className="sidebarSmallName" onClick={this.handleClick(prop)}key={`name${prop}`}> {obj[prop].album_name} </h3>
          <h4 key={`date${prop}`}> {obj[prop].release_date} </h4>
          </div>
          )
        }
      }
    return albumNames
  }


  handleClick(albumId) {
    return e => {
      this.props.fetchTracks(albumId)
      this.props.router.push(`artist/${this.props.params.artistId}/album/${albumId}`)
    }
  }

  albums() {
    //This should eventually be passed to the sidebar container
    // Currently using this to test different tracks
    this.props.fetchAlbums
    return this.parseAlbums()
  }

  currentArtist(prop) {
    if (Object.keys(this.props.albums.albums).length !== 0 &&
        Object.keys(this.props.albums.albums).includes(this.props.params.albumId)){
      return this.props.albums.albums[this.props.params.albumId].artist[prop]
    }
  }

  render() {
    let parsedAlbums = this.albums();
    return(

      <div className="sidebar">
      <h2>{this.currentArtist('artist_name')}</h2>
      <br/>
      <h3>Discography:</h3>
      {parsedAlbums}
      </div>
    )
  }
}

export default Sidebar
