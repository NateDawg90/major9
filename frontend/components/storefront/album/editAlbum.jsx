import React from 'react'

class EditAlbum extends React.Component {
  constructor(props) {
    super(props)
    this.displayTracks = this.displayTracks.bind(this)
  }
  displayTracks() {
    let obj;
    let tracks = [];
    obj = this.props.tracks
    console.log(this.props.tracks);
    // debugger
    for(var prop in obj){
      console.log(obj[prop]);
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
                placeHolder={`Track Name for Track ${obj[prop].track_number}`}/>
            </li>
            <li className="trackLength" key={`Length_${prop}`}>
              0:00
            </li>
          </ul>
          <li className="trackHoverLink" key={`hover${prop}`}>
            <button> Delete</button>
          </li>
       </div>
     )
      }

    //Add track lengths when we get to downloadable files
    return tracks
  }

  render() {
    console.log(this.props);
    let artist_name = this.props.currentUser['artist_name']
    return(
      <div className="Tracks">
        <form className="AlbumForm">
        <input className="AlbumTitle" type="text"
          placeHolder = "Album Name"
          defaultValue={this.props.currentAlbum.album_name} />
        <label>Album Name:</label>
        <h2> Song Player goes here</h2>
        <h3>Digital Album</h3>
        <h4>Includes unlimited streaming via the free Major9 app, plus
        high-quality download in MP3.</h4>
        <br/>
        <h2> Purchasing Component </h2>
        <h2>Buy Now {this.props.currentAlbum.price}</h2>
          {this.displayTracks()}
        <br />
        <label>Release Date:</label>
        <input type="text" defaultValue={this.props.currentAlbum.release_date} />
        <br />
          <label>Description:</label>
          <textArea
            defaultValue={this.props.currentAlbum.description}
            placeHolder="Description" />
        <br />
          <label>Credits:</label>
          <br/ >
          <input type="text"
            defaultValue={this.props.currentAlbum.credits}
            placeHolder="Credits"/>
        <br />
        </form>
      </div>
    )
  }
}

export default EditAlbum
