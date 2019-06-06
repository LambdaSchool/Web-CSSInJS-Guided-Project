import React from 'react';
import styled from 'styled-components';
import Playground from './Playground';

const StyledContainer = styled.div`
  margin: 30px;
  /* layout stuff here */
`;

export default class Container extends React.Component {
  render() {
    return (
      <StyledContainer id="containerComponent" className='container'>
        <Playground primaryColor="green" secondaryColor="black" />
      </StyledContainer>
    );
  }
}
