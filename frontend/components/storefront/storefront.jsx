import React from "react";

class storeFront extends React.Component{

  constructor (props) {
    super(props)
    this.albums = this.albums.bind(this);
  }

  albums() {
    this.props.fetchAlbums
    return this.parseAlbums()
  }

  //
  // handleAlbumClick = (albumId) => {
  //   return e => {
  //     this.props.router.push
  //   }
  // }

  parseAlbums() {
    const albumNames = []
    let obj = this.props.albums.albums
    // console.log(this.props.albums.albums);
    // console.log(this.props.children);
      for (var prop in obj ) {
        // debugger
        albumNames.push(<h1 key={prop}>{obj[prop].album_name}</h1>)
      }
    return albumNames
  }

  componentWillMount() {
    this.props.fetchTracks(this.props.params.albumId);
  }
  
  render() {
    // debugger
  return (
  <div>
    <h1> It's me, storeFront.</h1>
    <h1> Here my albums:</h1>
    {this.albums()}
    <br / >
    {this.props.children}
  </div>
    )
  };
};

export default storeFront;
