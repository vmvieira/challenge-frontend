import React from 'react';
import styled from 'styled-components';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';

const subreddits = [
  {
    image_src: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/32`,
    name: 'wallstreetbets',
  },
  {
    image_src: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/32`,
    name: 'politics',
  },
  {
    image_src: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/32`,
    name: 'sports',
  },
  {
    image_src: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/32`,
    name: 'pcmasterrace',
  },
];

const CommunityWrap = styled.div`
  background-color: white;
  border-radius: 3px;
  border: 1px solid #c8c8c8;
  .title {
    position: relative;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    height: 80px;
    background-image: url('https://picsum.photos/300/70');
  }
  .title > span {
    position: absolute;
    bottom: 10px;
    left: 15px;
    color: white;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const CommunityList = styled.div`
  .community {
    display: flex;
    align-items: center;
    padding: 8px 0px;
    padding-left: 25px;
    border-top: 1px solid #f0f0f0;
  }
  svg {
    color: #00b400;
  }
  img {
    max-width: 32px;
    min-width: 32px;
    max-height: 32px;
    min-height: 32px;
    border-radius: 50%;
    margin: 5px;
  }
  .name {
    font-weight: 600;
    color: black;
  }
`;

const PrimaryBtns = styled.div`
  button {
    padding: 10px 20px;
    color: ${(p) =>
      p.secondary ? p.theme.primaryColor : p.theme.secondaryColor};
    background: ${(p) =>
      p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
    border: 1px solid
      ${(p) => (p.secondary ? p.theme.primaryColor : p.theme.secondaryColor)};
    font-weight: bold;
    text-decoration: none;
    border-radius: 24px;
    width: 100%;
  }
`;

const SecondaryBtns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 15px 10px;
  button {
    padding: 10px 10px;
    color: ${(p) =>
      p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
    background: ${(p) =>
      p.secondary ? p.theme.primaryColor : p.theme.secondaryColor};
    border: 1px solid
      ${(p) => (p.secondary ? p.theme.secondaryColor : p.theme.primaryColor)};
    font-weight: bold;
    text-decoration: none;
    border-radius: 24px;
  }
`;

function Communities() {
  return (
    <CommunityWrap className='community-section'>
      <div className='title'>
        <span className='pointer'>Today's Top Growing Communities</span>
      </div>
      <CommunityList className='communities-wrapper'>
        {subreddits.map((subreddit, index) => (
          <div key={index} className='community pointer'>
            <span>{index + 1}</span>
            <ArrowDropUp />
            <img src={subreddit.image_src} alt='some random lorem' />
            <span className='name'>r/{subreddit.name}</span>
          </div>
        ))}
      </CommunityList>

      <PrimaryBtns>
        <button primary className='pointer'>
          {' '}
          View All{' '}
        </button>
      </PrimaryBtns>
      <SecondaryBtns>
        <button className='pointer'> Top </button>
        <button className='pointer'> News </button>
        <button className='pointer'> Sports </button>
        <button className='pointer'> Near You </button>
      </SecondaryBtns>
    </CommunityWrap>
  );
}

export default Communities;
