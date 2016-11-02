import React from "react"
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';
//testing
import rootMiddleware from './middlewares/root_middleware';
import { fetchAlbums, fetchAlbum, createAlbum,
         updateAlbum, deleteAlbum} from './actions/album_actions';
import { fetchTracks, fetchTrack, createTrack,
        updateTrack, deleteTrack} from './actions/track_actions';
// import { fetchAlbums, fetchAlbum, createAlbum,
//          updateAlbum, deleteAlbum} from './util/api_util';
// import { fetchTracks, fetchTrack, createTrack,
//         updateTrack, deleteTrack} from './util/api_util';


document.addEventListener("DOMContentLoaded", () => {
  Modal.setAppElement(document.body);
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {currentUser: window.currentUser, errors: []}
    };
    store = configureStore(preloadedState);
    console.log(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  //testing
  window.rootMiddleware = rootMiddleware;
  window.store = store;
  window.fetchAlbums = fetchAlbums;
  window.fetchAlbum = fetchAlbum;
  window.createAlbum = createAlbum;
  window.updateAlbum = updateAlbum;
  window.deleteAlbum = deleteAlbum;
  window.fetchTracks= fetchTracks;
  window.fetchTrack = fetchTrack;
  window.createTrack = createTrack;
  window.updateTrack = updateTrack;
  window.deleteTrack = deleteTrack;
})
