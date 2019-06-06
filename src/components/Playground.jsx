import React from 'react';
import styled from 'styled-components';

const Div = styled.div`

`;

export default function Playground({ primaryColor, secondaryColor }) {
  return (
    <Div
      className='alert'
    >
      <h3>
        This is the playground component
      </h3>

      more playground stuff
    </Div>
  );
}
