import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
  font-weight: bold;

  h3.pinky {
    color: pink;
  }
`;

export default function Playground({ }) {
  return (
    <Div
      className='alert'
    >
      <h3 className='pinky'>
        This is the playground component
      </h3>

      more playground stuff
    </Div>
  );
}
