import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Spinner } from '../Spinner';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const CardWrap = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 12fr;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas:
    'sidebar title'
    'sidebar body'
    'sidebar footer';
  background-color: white;
  margin-top: 15px;
  border-radius: 4px;
  color: black;
  &:hover {
    cursor: pointer;
    border: solid 1px #828282;
  }

  @media (max-width: 768px) {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 12fr;
    grid-template-rows: 1fr auto 1fr;
    grid-template-areas:
      'title title'
      'body body'
      'sidebar footer';
  }
`;

const SidebarDiv = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 4px;
  background-color: #f5f5f5;

  > svg {
    color: #828282;
  }

  > svg:hover {
    border-radius: 2px;
    background-color: #dcdcdc;
  }

  > .upvote:hover {
    color: #c80000;
  }

  > .downvote:hover {
    color: #0078d2;
  }

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;
const TitleDiv = styled.div`
  grid-area: title;
  display: flex;
  align-items: center;
  padding-left: 5px;

  .subreddit {
    font-weight: 600;
    font-size: 14px;
    padding-right: 5px;
  }

  .user {
    padding-left: 5px;
    font-size: 12px;
    color: #969696;
  }

  .underline:hover {
    text-decoration: underline;
  }

  img {
    min-width: 16px;
    min-height: 16px;
    max-width: 16px;
    max-height: 16px;

    margin: 0px 5px;
    border-radius: 50%;
  }
`;
const BodyDiv = styled.div`
  grid-area: body;
  display: flex;
  flex-direction: column;
  padding-left: 5px;

  .title {
    margin-left: 5px;
    font-size: 18px;
    font-weight: 600;
  }

  .description {
    margin-top: 5px;
    margin-left: 5px;
  }
`;
const FooterDiv = styled.div`
  grid-area: footer;
  display: flex;
  align-items: center;
  padding-left: 3px;
  padding: 2px;
  margin: 0 5px;

  svg {
    color: #828282;
    margin-right: 5px;
    font-size: 16px;
  }

  svg:hover {
    border-radius: 2px;
    background-color: #dcdcdc;
  }

  span {
    font-size: 12px;
    font-weight: 500;
    margin-right: 10px;
  }

  .action:first-child {
    margin-left: 0px;
  }

  .action:last-child {
    margin-right: 0px;
    margin-left: 5px;
  }

  .action:hover {
    border-radius: 5px;
    background-color: rgb(230, 230, 230);
  }
`;

function PostCard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setPosts([...response.data]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getPosts();
  }, []);

  const renderedPosts = () => {
    if (loading) {
      return <Spinner />;
    }
    return (
      <>
        {posts.slice(0, 10).map((item, idx) => (
          <CardWrap key={idx}>
            <SidebarDiv>
              <ArrowUpwardIcon className='upvote' />
              <span>{Math.floor(Math.random() * 1000)}</span>
              <ArrowDownwardIcon className='downvote' />
            </SidebarDiv>
            <TitleDiv>
              <img
                src={`https://picsum.photos/id/${Math.floor(
                  Math.random() * 50
                )}/16`}
                alt='random tooltip'
              />
              <span className='subreddit underline'>
                r/{item.title.replace(/ .*/, '')}
              </span>
              <span>Posted by</span>
              <span className='user underline'>u/guy who likes the stonk</span>
            </TitleDiv>
            <BodyDiv>
              <div className='title'>
                {item.title.split(' ').slice(0, 3).join(' ')}
              </div>
              <div className='description'>
                {item.title.split(' ').slice(0, 4).reverse().join(' ')}
              </div>
            </BodyDiv>
            <FooterDiv>
              <div className='action'>
                <ModeCommentIcon className='comment-icon' />
                <span>{Math.floor(Math.random() * 1000)} Comments</span>
              </div>
              <div className='action'>
                <ShareIcon />
                <span>Share</span>
              </div>
              <div className='action'>
                <BookmarkIcon />
                <span>Save</span>
              </div>
              <MoreHorizIcon className='more-icon action' />
            </FooterDiv>
          </CardWrap>
        ))}
      </>
    );
  };

  return <div>{renderedPosts()}</div>;
}

export default PostCard;
