import React from 'react';
import Playground from './Playground';


export default class Container extends React.Component {
  render() {
    return (
      <div id="containerComponent" className='container'>
        <Playground />
      </div>
    );
  }
}
