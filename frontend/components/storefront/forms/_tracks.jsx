import React from "react"
import merge from "lodash/merge"
import Modal from 'react-modal'
import {Router, hashHistory} from 'react-router'
import NewTrackContainer from './new_track_container';

class TracksForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  displayTracks() {
    let obj;
    let tracks = [];
    obj = this.props.tracks
    console.log(this.props.tracks);
    console.log(this.props.params);
    // debugger
    console.log(obj);
    for(var prop in obj){
        console.log(this.state.infoOpen)
      let trackLink = `/artist/${this.props.params.artistId}/album/${this.props.params.albumId}/track/${prop}`
      let infoBox = this.infoBox(prop)
      tracks.push(
        <div className="TrackListItem-box" key={`Box${prop}`}>
          <ul className="TrackListItem">
            <li className="playButton" />
            <li className="trackNumber trackNumEdit" key={`Track_${prop}`}>
              {obj[prop].track_number}.
            </li>
            <li className="trackListLink" key={prop}>
                {obj[prop].track_name}
            </li>

          </ul>
          <li className="edit-button" key={`hoverInfo${prop}`}>
            <button onClick={this.infoOpen(obj[prop].id)}> Edit </button>
          </li>
          <li className="edit-button" key={`hover${prop}`}>
            <button onClick={this.handleDelete(obj[prop].id)} > Delete</button>
          </li>
          {infoBox}
       </div>
     )
    }
    return tracks
  }

  componentWillReceiveProps(newProps){
    console.log(newProps);
    console.log(this.props.tracks);
      if (Object.keys(newProps.tracks).length > Object.keys(this.props.tracks).length){
        this.setState({modalOpen: false});
        this.clearErrors([""]);
      }

  }

  handleDelete(trackId){
    return e => {
      e.preventDefault();
      console.log(trackId);
    this.props.deleteTrack(this.props.params.albumId, trackId)
    this.setState({})
   }

  }
  onModalClose() {
    this.props.clearErrors([""]);
    this.setState({modalOpen: false})
  }

  infoBox(prop){

  }
  infoOpen(prop) {
    // return e => {
    //   let newState = this.state.infoOpen
    //   if (Object.keys(newState).includes(""+prop)){
    //     newState = this.state.infoOpen
    //     delete newState[""+prop]
    //     this.setState({infoOpen: StnewState})
    //   } else {
    //     newState = this.state.infoOpen
    //     newState[""+prop] = ""
    //     this.setState({infoOpen: newState})
    //
    //   }
    // }
    return e => {
      hashHistory.push(`/artist/${this.props.params.artistId}/album/${this.props.params.albumId}/track/${prop}`)
    }
  }

  openModal() {
    this.props.editAlbumMode(true)

    this.setState({modalOpen:true})
  }

  newButton(){
    console.log(this.props.tracks);
    return(
      <div className="TrackListItem-box" key={`BoxNew`}>
        <ul className="TrackListItem">
          <li className="trackNumber trackNumEdit" key={`Track_New`}>
            {Object.keys(this.props.tracks).length + 1}.
          </li>
          <li className="trackListLink" key="new">
            <button onClick={this.openModal.bind(this)}>Add a new Track</button>
          </li>
        </ul>
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
        <NewTrackContainer params={this.props.params} />
        <button onClick={this.onModalClose.bind(this)}>Close</button>
      </div>
    </Modal>
      </div>
    )
  }

  addNewTrack(){

  }
  render () {
    let newButton = this.newButton()
    return (
      <div>
      <form>
        {this.displayTracks.bind(this)()}
        {newButton}
      </form>
      </div>
    )
  }

}

export default TracksForm
