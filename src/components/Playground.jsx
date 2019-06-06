import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
  font-weight: ${props => (props.bold ? 'bold' : 'inherit')};
  font-family: 'Times New Roman', Times, serif;
`;

export default function Playground({}) {
  return (
    <Div
      className='alert'
    >
      <h3>
        This is the playground component
      </h3>

      <Div>hello world!!!!!!</Div>

      more playground stuff
    </Div>
  );
}
