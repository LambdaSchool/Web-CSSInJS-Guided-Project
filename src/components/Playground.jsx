import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
  font-weight: bold;
`;

const H3 = styled.h3`
  color: pink;
`;

export default function Playground({ }) {
  return (
    <Div
      className='alert'
    >
      <H3>
        This is the playground component
      </H3>

      more playground stuff
    </Div>
  );
}
