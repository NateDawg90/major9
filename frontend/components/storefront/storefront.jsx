import React from "react";
import SidebarContainer from './sidebar/sidebar_container';
import NewAlbumContainer from './forms/new_album_container';
import Modal from 'react-modal';

class storeFront extends React.Component{

  constructor (props) {
    super(props)
    this.contentLoaded = this.contentLoaded.bind(this)
    this.state = {
      modalOpen: false
    }

  }

  onModalClose() {
    this.props.clearErrors([""]);
    this.setState({modalOpen: false})
  }

  openForm() {
    this.setState({modalOpen: true});
  }
  //
  // handleAlbumClick = (albumId) => {
  //   return e => {
  //     this.props.router.push
  //   }
  // }

  componentWillReceiveProps(newProps){
    if (Object.keys(newProps.albums.albums).length > Object.keys(this.props.albums.albums).length){
      this.setState({modalOpen: false});
    }
  }

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
    if (Object.keys(this.props.albums.albums).length !== 0 &&
    this.props.albums.albums[Object.keys(this.props.albums.albums)[0]].artist_id == this.props.params.artistId) {
      return true
    } else if (this.props.errors.length !== 0) {
      return true
    }

    return false
  }

  //Probably flex on StoreFront and put the children components in order
  // Only child should be album and track components
  // Have Art and Sidebar components explicit

  toggleEdit() {
    this.props.editAlbumMode(true)
  }

  render() {
    if (this.contentLoaded() == false) {
      return <div className="loader">Loading...</div>
    }
    if (this.props.errors==='["No Albums found"]' || this.props.errors[0]=== "No Albums found") {
      if(this.props.currentUser) {
        if (this.props.currentUser.id == this.props.params.artistId && this.props.editMode === false) {
          return (<div className="StoreFront-message StoreFront">
            <div className="StoreFront-message">
              <h1>Welcome back to Major9! </h1>
              <h3> Please add an album or add a track. </h3>
              <h3> Click on Add An Album to get started. </h3>
              <br/>
              <button onClick={this.openForm.bind(this)}>Add An Album</button>
            </div>
            <Modal
               isOpen={this.state.modalOpen}
               onRequestClose={this.onModalClose.bind(this)}
               style = {{content :{
                  top                   : '50%',
                  left                  : '50%',
                  right                 : 'auto',
                  bottom                : 'auto',
                  marginRight           : '-50%',
                  transform             : 'translate(-50%, -50%)'
                  }
                }
              }
              >
              <div className="session-box">
                <NewAlbumContainer />
                <br />
                <button onClick={this.onModalClose.bind(this)}>Close</button>
              </div>
            </Modal>
          </div>)
        }
        }

          return (<div className="StoreFront-message">
            No tracks here! Log in to add some tracks.
          </div>)


    } else {
      // <h5>Banner Goes Here</h5>
    return (
      <div className = "StoreFrontBox">
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
