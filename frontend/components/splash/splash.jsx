import React from 'react';
import { Link, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import AlbumContainer from '../storefront/album/album_container';
import Modal from 'react-modal';

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      infoOpen: false
    }
  }

  componentWillMount() {
    this.props.fetchArtists
  }
// e => {hashHistory.replace(`artist/${artistIdx}`
  parseArtists() {
    console.log(this.props.artists);
    let parsedArtists = Object.keys(this.props.artists).map( (artistIdx) => {
      let featuredAlbum = this.props.artists[artistIdx].albums[this.props.artists[artistIdx].albums.length-1]
      if (featuredAlbum){
      let artistLink = `#/artist/${artistIdx}`
      return(<li className="frontpage-album">
          {this.props.artists[artistIdx].artist_name}
          <Link to={`artist/${artistIdx}`} key={artistIdx}><img className="frontpage-picture" src={featuredAlbum.image_url} alt={this.props.artists[artistIdx].artist_name}/></Link>
      </li>

    )
  }})

    Object.keys(this.props.artists).map( (artistIdx) => {
      let secondAlbum = this.props.artists[artistIdx].albums[this.props.artists[artistIdx].albums.length-2]
      let artistLink = `#/artist/${artistIdx}`
      if (secondAlbum){
      parsedArtists.push(<li className="frontpage-album">
          {this.props.artists[artistIdx].artist_name}
          <Link to={`artist/${artistIdx}/album/${secondAlbum.id}`} key={artistIdx}><img className="frontpage-picture" src={secondAlbum.image_url} alt={this.props.artists[artistIdx].artist_name}/>
            </Link>
      </li>

    )
  }})
  shuffle(parsedArtists);
  return parsedArtists
  }

  // <img src={featuredAlbum.image_url}
  //   alt={<Link to={`artist/${artistIdx}`} key={artistIdx}>{this.props.artists[artistIdx].artist_name}</Link>}
  //   data-action={artistLink}/>


  // <div key={`Box${featuredAlbum.album_name}`}>
// </div>
  // <h3 key={`name${featuredAlbum.album_name}`}> {featuredAlbum.album_name} </h3>
  // <Link to={`artist/${artistIdx}`} key={artistIdx}>{this.props.artists[artistIdx].artist_name}</Link>

  artistsExist(){

  }

  parseUser(){
    let content = [];
     let  artistIdx = this.props.currentUser.id
     console.log(this.props.artists);
     if(this.props.artists){
    if(Object.keys(this.props.artists).length !== 0){
      let albumObject = this.props.artists[artistIdx].albums
      Object.keys(this.props.artists[artistIdx].albums).forEach( (albumId) => {
        let artistLink = `#/artist/${artistIdx}`
        content.push(<li className="frontpage-album">
            {albumObject[albumId].album_name}
            <div className="image">
            <Link to={`artist/${artistIdx}/album/${albumObject[albumId].id}`} key={albumObject[albumId].id}>
              <img className="frontpage-picture" src={albumObject[albumId].image_url} alt={albumObject[albumId].album_name}/>
            </Link>
            </div>
        </li>
      )})
  } else {
    content.push(
      <li>
      <h1> You have no albums! </h1>
      <button>Add Album</button>
      </li>
    )
  }
}
  return(
    <div>
      <h2>Your Albums:</h2>
      <ul>
        {content}
      </ul>
    </div>
  )

  }

  render() {

    // <li><Link to="artist/1" key={1}>Guest</Link></li>
    // <li><Link to="artist/2" key={2}>Andrew</Link></li>
    // <li><Link to="artist/3" key={3}>Jimmy Weckl</Link></li>
    // <li><Link to="artist/4" key={4}>Nekomata Master</Link></li>
    let artists;
    if(this.props.artists) {
      if(Object.keys(this.props.artists).length !== 0) {
       artists = this.parseArtists.bind(this)()
      }
    }

    let currentUserAlbums;
    console.log(this.props.currentUser);
      if(this.props.currentUser) {
        if(Object.keys(this.props.currentUser).length !== 0) {
          currentUserAlbums = this.parseUser.bind(this)()
        }
      }


    //
    // <Coverflow
    //   width={960}
    //   height={480}
    //   displayQuantityOfSide={3}
    //   navigation={true}
    //   enableHeading={true}
    //   >
    //   {artists}
    // </Coverflow>
    <div className="content">
    </div>

    return(
        <div className="splash">
        <div className="top">
          <img src="https://s3-us-west-1.amazonaws.com/major9/Major9_Logo.png" className="splash-logo" />
        <br/>
        <br/>
        <h1> Welcome to Major 9</h1>
        <h2> The Homepage of Japanese Jazz</h2>
        <h3> Buy. Listen. Create.</h3>
        <br/>
          <button className="bigButton">First Time Here?</button>
          <br/>
          </div>
          <div className="outer">
            <div className="albums">
              <h2> Here are our featured artists: </h2>
              <ul className="splash">
                {artists}
              </ul>
            <br />
            <div className="content artist">
            {currentUserAlbums}
            </div>
          </div>
          </div>
          <br/>
          <br/>
          <br/><br/><br/><br/>
        </div>
    )

  }



}

export default Splash
