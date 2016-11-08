import React from 'react';
import ArtContainer from "../art/art_container";
import Modal from 'react-modal';
import NewAlbumContainer from '../forms/new_album_container';
import { Link } from 'react-router';

class Sidebar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalOpen: false,
      editMode: false,
      showAll: false
    }
    this.albums = this.albums.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.currentArtist = this.currentArtist.bind(this)
    this.contentMatching = this.contentMatching.bind(this)
    this.editButton = this.editButton.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.deleteAlbum = this.deleteAlbum.bind(this)
    this.albumNames = []
  }

  contentMatching(artistId){
    if (Object.keys(this.props.albums.albums).length !== 0){
      return this.props.albums.albums[Object.keys(this.props.albums.albums)[0]].artist_id == artistId
    }
  }


  parseAlbums() {
    let obj= this.props.albums.albums
    // console.log(this.props.albums.albums);
    // console.log(this.props.children);
    this.albumNames = [];
    Object.keys(obj).reverse().forEach( (prop) => {
      if (this.albumNames.length < 3 || this.state.showAll === true) {
        if(obj[prop].image_url) {
        this.albumNames.push(
          <div className="sidebarItemBox" key={`Box${prop}`}>
          <img className="sidebarItem" src={obj[prop].image_url} onClick={this.handleClick(prop)} key={`Item${prop}`}/>
          <h3 className="sidebarSmallName" onClick={this.handleClick(prop)}key={`name${prop}`}> {obj[prop].album_name} </h3>
          <h4 key={`date${prop}`}> {obj[prop].release_date} </h4>
          {this.deleteAlbum(prop)}
          </div>)
        } else {
        this.albumNames.push(
          <div className="sidebarItemBox" key={`Box${prop}`}>
          <h2 className="sidebarItem" onClick={this.handleClick(prop)} key={`Item${prop}`}>{obj[prop].album_name}</h2>
          <h3 className="sidebarSmallName" onClick={this.handleClick(prop)}key={`name${prop}`}> {obj[prop].album_name} </h3>
          <h4 key={`date${prop}`}> {obj[prop].release_date} </h4>
          {this.deleteAlbum(prop)}
        </div>
          )
        }
      }else if (this.albumNames.length === 3 && this.state.editMode ===  false && this.state.showAll === false){
        this.albumNames.push(
          <div>
            <Link onClick={this.showAllAlbums.bind(this)}><h3>more releases...</h3></Link>
          </div>
        )
      }
    }
  )
    return this.albumNames
  }

  showAllAlbums() {
    this.albumNames = [];
    this.setState({showAll: true})
  }

  deleteAlbum(prop){
    if (this.state.editMode === true) {
      return(<button key={`${prop}`} value={prop}
        onClick={this.handleDelete()}>Delete Album</button>)
    }
  }

  handleDelete(e) {
    return e => {
      console.log(e.target);
      this.props.deleteAlbum(e.target.value)
    }
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

  toggleEdit() {
    if (this.state.editMode === true) {
      this.setState({editMode: false, showAll: false})
      this.props.editAlbumMode(false)
      $(".editToggle").css("background-color: #3498db")

    } else {
      this.setState({editMode:true, showAll: true})
      this.props.editAlbumMode(true)
      $(".editToggle").css("background-color: orange")
    }
  }

  editButton() {
    if(this.isArtist()){
        return(<div><button className="editToggle" onClick={this.toggleEdit}>Edit Page</button> <br/></div>)
    }
    return(<div></div>)
  }

  isArtist() {
    if(this.props.currentUser) {
      if(this.props.currentUser.id == this.props.params.artistId)
        return true
    }
    return false
  }


  openForm() {
    this.setState({modalOpen: true});
  }

  newAlbum() {
    if(this.isArtist() && this.state.editMode === true){
    return (<div className="sidebarItemBox" key='editPage'>
    <h2 className="sidebarItem" key='addAlbum'
      onClick={this.openForm.bind(this)}> Add Album </h2>
    <h3 className="sidebarSmallName" key='addAlbumSmall'> Click to Add Album </h3>
    </div>)
    }
  }
  //Make default artist_name username, allow it to be changed on edit

  render() {
    let parsedAlbums = this.albums();
    let editButton = this.editButton();
    let newAlbum = this.newAlbum();
    if(this.contentMatching(this.props.params.artistId) == false) {
      return (
        <div>
        </div>
      )
    } else {
    return(
      <div className="sidebar">
      <h1>{this.currentArtist('artist_name')}</h1>
      {editButton}
      <br/>
      <h3>Discography:</h3>
      {newAlbum}
      {parsedAlbums}
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
      </div>
    )
    }
  }
  onModalClose() {
    this.setState({modalOpen: false})
  }
}


export default Sidebar
