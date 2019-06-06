import React from 'react';
import Playground from './Playground';


export default class Container extends React.Component {
  render() {
    return (
      <div id="containerComponent" className='container'>
        <Playground primaryColor="green" secondaryColor="black" />
        <Playground primaryColor="pink" secondaryColor="black" />
        <Playground primaryColor="blue" secondaryColor="black" />
      </div>
    );
  }
}
