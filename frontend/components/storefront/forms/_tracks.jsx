import React from "react"

class TracksForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
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
      let trackLink = `/artist/${this.props.params.artistId}/album/${this.props.params.albumId}/track/${prop}`
      tracks.push(
        <div className="TrackListItem-box" key={`Box${prop}`}>
          <ul className="TrackListItem">
            <li className="trackNumber trackNumEdit" key={`Track_${prop}`}>
              {obj[prop].track_number}.
            </li>
            <li className="trackListLink" key={prop}>
              <input type="text" className="trackEdit"
                defaultValue={obj[prop].track_name}
                placeholder={`Track Name for Track ${obj[prop].track_number}`}/>
            </li>

          </ul>
          <li className="edit-button" key={`hoverInfo${prop}`}>
            <button> Info </button>
          </li>
          <li className="edit-button" key={`hover${prop}`}>
            <button> Delete</button>
          </li>
       </div>
     )

    //  tracks.push(
    //    <div className="TrackListItem-box" key={`BoxNew`}>
    //      <ul className="TrackListItem">
    //        <li className="trackNumber trackNumEdit" key={`Track_New`}>
    //          {Object.keys(obj).length + 1}.
    //        </li>
    //        <li className="trackListLink" key={prop}>
    //          <button className="trackNew"
    //            value="Add a New Track"/>
    //        </li>
    //      </ul>
    //   </div>
    //  )

    }
    return tracks
  }


  render () {
    return (
      <div>
      {this.displayTracks.bind(this)()}
      </div>
    )
  }

}

export default TracksForm
