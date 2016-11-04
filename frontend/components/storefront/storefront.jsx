import React from "react";

class storeFront extends React.Component{

  constructor (props) {
    super(props)
    this.albums = this.albums.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  albums() {
    //This should eventually be passed to the sidebar container
    // Currently using this to test different tracks
    this.props.fetchAlbums
    return this.parseAlbums()
  }

  //
  // handleAlbumClick = (albumId) => {
  //   return e => {
  //     this.props.router.push
  //   }
  // }

  handleClick(albumId) {
    return e => {
      this.props.fetchTracks(albumId)
      this.props.router.push(`artist/${this.props.params.artistId}/album/${albumId}`)
    }
  }

  parseAlbums() {
    const albumNames = []
    let obj = this.props.albums.albums
    // console.log(this.props.albums.albums);
    // console.log(this.props.children);
      for (var prop in obj ) {
        // debugger
        albumNames.push(<h2 className="albumName" onClick={this.handleClick(prop)}key={prop}>{obj[prop].album_name}</h2>)
      }
    return albumNames
  }

  componentWillMount() {
    this.props.fetchTracks(this.props.params.albumId);
    this.props.fetchArtist;
  }

  render() {
    let parsedAlbums = this.albums();
    console.log(parsedAlbums);
  return (
  <div className="Albums">
    <h2> Here my albums:</h2>
    {parsedAlbums}
    <br / >
    {this.props.children}
  </div>
    )
  };
};

export default storeFront;
