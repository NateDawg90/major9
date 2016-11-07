import React from "react";
import SidebarContainer from './sidebar/sidebar_container';

class storeFront extends React.Component{

  constructor (props) {
    super(props)
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

  return (
    <div className = "StoreFrontBox">
    <h5>Banner Goes Here</h5>
  <div className = "StoreFront">
    <div className="Albums">
      {this.props.children}
    </div>
    <SidebarContainer />
  </div>
  </div>
    )
  };
};

export default storeFront;
