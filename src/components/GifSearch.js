
import React from 'react'

export default class GifSearch extends React.Component{

  constructor(){
    super()
    this.state = {
      searchParam: 'fluffy cats'
    }
  }

  handleSearch = (e) => {
    this.setState({
      searchParam: e.target.value
    })
  }

  render(){
    // debugger
    return(
      <form onSubmit={(event) => this.props.submitHandler(event, this.state.searchParam)}>
        <input type="text" onChange={event => this.handleSearch(event)} value={this.state.searchParam}></input>
        <input type="submit" value="search query"></input>
      </form>
    )
  }


//<GifSearch /> should receive a callback prop from it's parent. On a submit event, it should invoke that callback prop with the value of the text input. It is this callback function, defined in <GifListContainer />, that will actually query the api with the text the user has entered.

}
