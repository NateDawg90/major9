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

  //Probably flex on StoreFront and put the children components in order
  // Only child should be album and track components
  // Have Art and Sidebar components explicit
  // <h2> Here my albums:</h2>
  // {parsedAlbums}
  render() {
    let parsedAlbums = this.albums();
  return (
  <div className = "StoreFront">
    <h1>Banner Goes Here</h1>
    <div className="Albums">
      <br / >
      {this.props.children}
    </div>
  </div>
    )
  };
};

export default storeFront;
