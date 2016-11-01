import React from "react";
import GreetingContainer from './greeting/greeting_container';

const App = (store) => {
  // console.log(store);
  return (
  <div>
    <GreetingContainer/>
    {store.children}
  </div>
);};

export default App;
