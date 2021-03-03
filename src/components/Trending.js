import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Spinner } from './Spinner';

const TrendingSection = styled.div`
  .title {
    font-size: 15px;
    font-weight: 600;
  }

  .cards {
    margin-top: 15px;
    display: flex;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const TrendingCard = styled.div`
  margin: 0px 5px;
  width: 100%;
  height: 180px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  color: white;
  position: relative;

  &:first-child {
    margin-left: 0px;
  }
  &:last-child {
    margin-right: 0px;
  }

  .context {
    position: absolute;
    bottom: 0px;
    padding-left: 15px;
    padding-bottom: 10px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
  }

  .description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .subreddit {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export default function Trending() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTrending() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/photos'
        );
        setTrending([...response.data]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getTrending();
  }, []);

  const renderedTrending = () => {
    if (loading) {
      return <Spinner />;
    }
    return (
      <TrendingSection className='trending-today-section'>
        <span className='title'>Trending today</span>
        <div className='cards pointer'>
          {trending.slice(0, 4).map((item, idx) => (
            <TrendingCard
              key={idx}
              className='trending-card hoverable'
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 35%, transparent), url("https://picsum.photos/id/${Math.floor(
                  Math.random() * 50
                )}/200/300")`,
              }}
            >
              <div className='context'>
                <span className='title'>
                  {item.title.split(' ').slice(0, 3).join(' ')}
                </span>
                <br />
                <span className='description'>
                  {item.title.split(' ').slice(0, 4).reverse().join(' ')}
                </span>
                <div className='subreddit'>
                  <img src={item.url} alt='random tooltip' />
                  <span>r/{item.title.replace(/ .*/, '')}</span>
                </div>
              </div>
            </TrendingCard>
          ))}
        </div>
      </TrendingSection>
    );
  };

  return <div>{renderedTrending()}</div>;
}
