import React from "react";
import { Provider } from 'react-redux';
import {Router, Route, hashHistory,IndexRoute,IndexRedirect, DefaultRoute } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import StoreFrontContainer from './storefront/storefront_container';
import AlbumContainer from './storefront/album/album_container';
import TrackContainer from './storefront/track/track_container';
import {fetchAlbums,fetchAlbumsFeatured,
        fetchAlbum} from '../actions/album_actions';
import {fetchTracks} from '../actions/track_actions';
import {receiveErrors} from '../actions/session_actions';
// const _redirectIfLoggedIn = (store) => {
//   if (store.getState().session.currentUser) {
//     location.replace('/');
//   }
// };


const Root = ({store}) => {
  const requestAlbumsOnEnter = (nextState, replace) => {
    store.dispatch(fetchAlbumsFeatured(nextState.params.artistId))
    let albumIds = Object.keys(store.getState().albums.albums)
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

  const requestAlbumOnEnter = (nextState, replace) => {
    store.dispatch(fetchAlbum(nextState.params.albumId))
    store.dispatch(fetchTracks(nextState.params.albumId))
    store.dispatch(fetchAlbums(nextState.params.albumId))
  }

  const redirectToFeatured = (nextState, replace) => {
    if (nextState.params.albumId === 'featured') {
    let albumIds = Object.keys(store.getState().albums.albums)
    store.dispatch(fetchTracks(nextState.params.albumId))
    replace(`/artist/${nextState.params.artistId}/album/${albumIds[0]}`)
    }
  }
  const requestTracksOnEnter = (nextState) => {
    store.dispatch(fetchTracks(nextState.params.albumId))
  }
//make whole page for logged out user with access to session form
//Add a featured artists/albums page as indexroute/defaultroute
// Maybe need to add featured_rank_num: to albums?

//Remember that onEnters run from the children first (DFS)

  return (<Provider store = {store}>
    <Router history = {hashHistory}>
      <Route path="/" component={App} onEnter={redirectIfLoggedOut} >
        <Route path="/artist/:artistId" component={StoreFrontContainer}
           onEnter={requestAlbumsOnEnter}>
          <Route path="album/:albumId" component={AlbumContainer}>
            <Route path="track/:trackId" component={TrackContainer}
              onEnter={requestAlbumOnEnter}/>
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>);
};

export default Root;
