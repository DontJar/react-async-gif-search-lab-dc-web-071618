
import React from 'react';

export default class GifList extends React.Component{


  render(){
    return(
      <div>Hi from the GifList component.  Here are the gifs you asked for:
        <ul>
          {this.props.gifList.map(giffy => (
            <li>
              <img src={giffy.images.original.url} alt={giffy.title}/>
            </li>
            ))}
        </ul>
      </div>
    )
  }
//<GifList /> is a presentational component. It receives data from it's props and renders html given the input data. It can render a top level <ul> with each gif as an <li>.

}
