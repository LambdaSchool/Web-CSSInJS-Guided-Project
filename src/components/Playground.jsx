import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;

    &:hover {
      background: green;
    }

    @media (max-width: 500px) {
      background: red;
    }
`;

export default function Playground({ }) {
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
