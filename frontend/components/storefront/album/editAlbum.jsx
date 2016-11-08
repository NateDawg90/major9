import React from 'react'

class EditAlbum extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      album:{}
    }
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
                placeholder={`Track Name for Track ${obj[prop].track_number}`}/>
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
          placeholder = "Album Name"
          value={this.props.currentAlbum.album_name} />
        <h2> Song Player goes here</h2>
        <h3>Digital Album</h3>
        <h4>Includes unlimited streaming via the free Major9 app, plus
        high-quality download in MP3.</h4>
        <br/>
        <h2> Purchasing Component </h2>
        <h2>Buy Now {this.props.currentAlbum.price}</h2>
          {this.displayTracks()}
        <br />
        <input type="text" placeholder="Release Date" value={this.props.currentAlbum.release_date} />
        <br />
        <br />
          <textArea
            className="EditDescription"
            value={this.props.currentAlbum.description}
            placeholder="Description" />
        <br />
          <br/ >
          <input type="text"
            defaultValue={this.props.currentAlbum.credits}
            placeholder="Credits"/>
        <br />
        </form>
      </div>
    )
  }
}

export default EditAlbum
