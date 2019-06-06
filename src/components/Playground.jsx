import React from 'react';

// the React Native way (function or object and inline styles)
const getStyle = (primaryColor, secondaryColor) => ({
  container: {
    color: primaryColor,
  },
  h3: {
    color: secondaryColor,
  },
});

export default function Playground({ primaryColor, secondaryColor }) {
  const style = getStyle(primaryColor, secondaryColor);

  return (
    <div
      style={style.container}
      id="playgroundComponent"
      className='alert'
    >
      <h3 style={style.h3}>
        This is the playground component
      </h3>

      more playground stuff
    </div>
  );
}
