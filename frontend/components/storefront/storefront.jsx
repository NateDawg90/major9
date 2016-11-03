import React from "react";

class storeFront extends React.Component{

  constructor (props) {
    super(props)
    this.albums = this.albums.bind(this);
  }

  albums() {
    this.props.fetchAlbums
    console.log(this.props.albums);
    console.log(this.props.fetchAlbums);
  }

  render() {
  return (
  <div>
    <h1> It's me, storeFront.</h1>
    <h1> Here my albums:</h1>
    {this.albums()}
    {this.props.children}
  </div>
    )
  };
};

export default storeFront;
