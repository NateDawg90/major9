import React from "react"
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';
document.addEventListener("DOMContentLoaded", () => {
  Modal.setAppElement(document.body)
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
})
