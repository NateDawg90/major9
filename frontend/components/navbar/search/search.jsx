import React from 'react';
import {Link} from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      suggestions: this.props.suggestions
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {

    this.setState({inputVal: e.currentTarget.value})
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.inputVal != this.state.inputVal){
      this.props.searchQuery(this.state.inputVal)
    }
  }

  clearVal() {
    this.setState({inputVal: ""})
  }

  renderSuggestions() {
    console.log(this.props.suggestions);
    let suggestions;
    if(this.state.inputVal === ''){
      return(<div></div>)
    }
    if(Object.keys(this.props.suggestions).length !== 0){
    suggestions = Object.keys(this.props.suggestions).map( (suggestionId) =>{
      let suggestedSong = this.props.suggestions[suggestionId].result
      return(
        <li className="result" onClick={this.clearVal.bind(this)}>
        <Link to={`/artist/${suggestedSong.artist.id}/album/${suggestedSong.album_id}/track/${suggestedSong.id}`}>
        {this.props.suggestions[suggestionId].result.track_name}</Link></li>
      )
    })
    }
    console.log(suggestions);
    return suggestions
  }

  render(){

    let renderedSuggestions = this.renderSuggestions()

    return(
      <div>
        <input className="search" onChange={this.handleInput} placeholder="Search for Tracks" value={this.state.inputVal}/>
        <ul className="suggestions">
          {renderedSuggestions}
        </ul>
      </div>
    )
  }

}

export default Search
