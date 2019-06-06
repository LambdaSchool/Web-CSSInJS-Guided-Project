import React from 'react';
import styled from 'styled-components';


const StyledPlayground = styled.div`
  font-weight: bold;
`;

const H3 = styled.h3`
  color: green;
`;

export default function Playground({ }) {
  return (
    <StyledPlayground
      className='alert'
    >
      <H3>
        This is the playground component
      </H3>

      more playground stuff
    </StyledPlayground>
  );
}
