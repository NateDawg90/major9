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

    for(var prop in obj){
      let trackLink = `/artist/${this.props.params.artistId}/album/${this.props.params.albumId}/track/${obj[prop].id}`
      tracks.push(
        <div className="TrackListItem-box" key={`Box${prop}`}>
          <ul className="TrackListItem">
            <li className="trackNumber" key={`Track_${prop}`}>
              {obj[prop].track_number}.
            </li>
            <li className="trackListLink" key={prop}>
              <Link to={trackLink}>{obj[prop].track_name}</Link>
            </li>
            <li className="trackLength" key={`Length_${prop}`}>
              0:00
            </li>
          </ul>
          <li className="trackHoverLink" key={`hover${prop}`}>
            <Link to={trackLink}>info</Link>
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
        <form>
        <input className="AlbumTitle" type="text" value={this.props.currentAlbum.album_name}></input>
        <h3>by {artist_name} </h3>
        <h2> Song Player goes here</h2>
        <h3>Digital Album</h3>
        <h4>Includes unlimited streaming via the free Major9 app, plus
        high-quality download in MP3.</h4>
        <br/>
        <h2> Purchasing Component </h2>
        <h2>Buy Now {this.props.currentAlbum.price}</h2>
          {this.displayTracks()}
        <br />
        <h4>released {this.props.currentAlbum.release_date} </h4>
        <br />
        <h4>{this.props.currentAlbum.description}</h4>
        <br />
        <h4>Created by {this.props.currentAlbum.artist_name}</h4>
        <br />
        <h4> {this.props.currentAlbum.credits}</h4>
        <br />
        </form>
      </div>
    )
  }
}

export default EditAlbum
