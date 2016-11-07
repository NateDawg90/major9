import React from "react";
import SidebarContainer from './sidebar/sidebar_container';

class storeFront extends React.Component{

  constructor (props) {
    super(props)
    this.contentLoaded = this.contentLoaded.bind(this)
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

  contentLoaded() {
    if (Object.keys(this.props.albums.albums).length !== 0) {
      return true
    } else if (this.props.errors.length !== 0) {
      return true
    }

    return false
  }

  //Probably flex on StoreFront and put the children components in order
  // Only child should be album and track components
  // Have Art and Sidebar components explicit
  render() {
    console.log(this.props.errors);
    if (this.contentLoaded() == false) {
      return <div className="loader">Loading...</div>
    }
    if (this.props.errors==='["No Albums found"]') {
        if (this.props.currentUser.id == this.props.params.artistId) {
          return (<div className="StoreFront-message">
            Welcome back to Major9! Please add an album or add a track.
          </div>)
        }else {
          return (<div className="StoreFront-message">
            No tracks here! Log in to add some tracks.
          </div>)
        }

    } else {
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
    );
  };
  };
};

export default storeFront;
