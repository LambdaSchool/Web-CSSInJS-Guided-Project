import React, { useState } from 'react';
import styled from 'styled-components';


const Div = styled.div`
  font-weight: ${props => (props.bold ? 'bold' : 'inherit')};
  font-family: 'Times New Roman', Times, serif;
`;

export default function Playground({ }) {
  const [shouldBeBold, setShouldBeBold] = useState(false);

  return (
    <Div
      className='alert'
    >
      <h3>
        This is the playground component
      </h3>

      <Div bold={shouldBeBold}>hello world!!!!!!</Div>

      <button onClick={() => setShouldBeBold(!shouldBeBold)}>toogle bold for my Divs</button>

      <input type="text" />
    </Div>
  );
}
