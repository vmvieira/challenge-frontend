import React from 'react';
import styled from 'styled-components';

const ResponsiveImg = styled.img`
  max-width: 100%;
  height: auto;
`;

function SuperSecret() {
  return (
    <div>
      <h1>Congratulations, you've reached the super secret page</h1>
      <h2>
        Here's your reward:{' '}
        <a
          href='https://bolzat.github.io/Bolzat.github.io-StonksSimulator2021/'
          target='_blank'
          rel='noreferrer'
        >
          TENDIES
        </a>
      </h2>
      <ResponsiveImg
        src='https://ih1.redbubble.net/image.379601685.6062/st,small,507x507-pad,600x600,f8f8f8.u7.jpg'
        alt='wallstreetbets logo'
      />
    </div>
  );
}

export default SuperSecret;
