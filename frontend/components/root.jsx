import React from "react";
import { Provider } from 'react-redux';
import {Router, Route, hashHistory, indexRoute } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import StoreFrontContainer from './storefront/storefront_container';
import AlbumContainer from './storefront/album/album_container';
import {fetchAlbums} from '../actions/album_actions';
import {fetchTracks} from '../actions/track_actions';
import {receiveErrors} from '../actions/session_actions';
// const _redirectIfLoggedIn = (store) => {
//   if (store.getState().session.currentUser) {
//     location.replace('/');
//   }
// };


const Root = ({store}) => {
  const requestAlbumsOnEnter = (nextState) => {
    store.dispatch(fetchAlbums(nextState.params.artistId))
    let albumIds = Object.keys(store.getState().albums.albums)
    store.dispatch(fetchTracks(albumIds[0]));
  }

  const redirectIfLoggedIn = (nextState, replace) => {
    store.dispatch(receiveErrors([""]))
    if(store.getState().session.currentUser!== null) {
      replace(`/artist/${store.getState().session.currentUser.id}`)
    }
  }

  const redirectIfLoggedOut = (nextState, replace) => {
    return e => {
      if(store.getState().session.currentUser=== null) {
        replace(`splash`)
      }
    }
  }

  const requestTracksOnEnter = (nextState) => {
    store.dispatch(fetchTracks(nextState.params.albumId))
  }
//make whole page for logged out user with access to session form


  return (<Provider store = {store}>
    <Router history = {hashHistory}>
      <Route path="/" component={App} onEnter={redirectIfLoggedOut} >
        <Route path="splash" component={SessionFormContainer}>
          <Route path="signup" onEnter={redirectIfLoggedIn}/>
          <Route path="login" onEnter={redirectIfLoggedIn}/>
        </Route>
        <Route path="/artist/:artistId" component={StoreFrontContainer}
           onEnter={requestAlbumsOnEnter}>
          <Route path="album/:albumId" component={AlbumContainer}>
            <Route path="track/:trackId" />
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>);
};

export default Root;
