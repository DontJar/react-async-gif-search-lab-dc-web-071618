import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends React.Component{

  constructor(){
    super();
    this.state = {
      fetchedGifs: []
    }
  }

  submitHandler = (e, searchTerm) => {
    e.preventDefault()
    this.gifGetter(searchTerm)
  }

  gifGetter = (whatsit) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${whatsit}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(r => r.json())
    .then(data => this.setStateWithGifs(data))
  }

  setStateWithGifs = (data) => {
    this.setState({
      fetchedGifs: data.data.slice(0,3)
    })
  }

  render(){
    return(
      <div>Hello from the GifListContainer container
        <GifList gifList={this.state.fetchedGifs} />
        <GifSearch submitHandler={this.submitHandler}/>
      </div>
    )
  }

}
