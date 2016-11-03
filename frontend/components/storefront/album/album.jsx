import React from "react";

class Album extends React.Component{
  constructor(props){
    super(props)
    this.displayTracks = this.displayTracks.bind(this)
  }

  displayTracks() {

    console.log(this.props);
    let obj = this.props.tracks.tracks
    let tracks = []
    for(var prop in obj){
      tracks.push(<li key={prop}>{obj[prop].track_name}</li>)
    }
    return tracks
  }

  componentWillMount() {
    this.props.fetchTracks(this.props.params.albumId);
  }

  currentAlbumName() {
    console.log(this.props.albums);
    if (Object.keys(this.props.albums.albums).length !== 0){
    return this.props.albums.albums[this.props.params.albumId].album_name
    }
  }
  render() {
    // debugger
    return(
    <div>
      <h1>{this.currentAlbumName.bind(this)()}</h1>
      <h1>Here are my tracks:</h1>
      <ul>
        {this.displayTracks()}
      </ul>
    </div>
  )
  }
}

export default Album;
