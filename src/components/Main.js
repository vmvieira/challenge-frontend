import React from 'react';
import styled from 'styled-components';

import Whatshot from '@material-ui/icons/Whatshot';
import NewReleases from '@material-ui/icons/NewReleases';
import TrendingUp from '@material-ui/icons/TrendingUp';
import Menu from '@material-ui/icons/Menu';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import PostCard from './PostCard/PostCard';

const MainBarWrap = styled.div`
  flex: 0.65;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const FilterWrap = styled.div`
  display: flex;
  background-color: white;
  border-radius: 3px;
  border: 1px solid #c8c8c8;
  padding: 10px 15px;
  margin-top: 15px;
`;

const FilterItemPrimary = styled.div`
  display: flex;
  color: ${(p) => p.theme.primaryColor};
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 5px 8px;
  margin: 0px 5px;
  font-size: 15px;
  align-items: center;
  font-weight: 600;

  &:first-child {
    margin-left: 0px;
  }
`;

const FilterItemSecondary = styled.div`
  display: flex;
  align-items: center;
  color: #969696;
  padding: 5px 8px;
  margin: 0px 5px;

  svg {
    margin-right: 5px;
  }

  &:hover {
    color: black;
    background-color: #f5f5f5;
    border-radius: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const FilterItemTertiary = styled.div`
  color: rgb(150, 150, 150);
  padding: 5px 8px;
  margin: 0px 5px;

  &:hover {
    background-color: #f5f5f5;
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const FilterItemMenu = styled.div`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.primaryColor};
  padding: 5px 8px;

  &:hover {
    background-color: #f5f5f5;
    border-radius: 20px;
  }
`;

const SpacerDiv = styled.div`
  flex: 1;
`;

function Main() {
  return (
    <MainBarWrap>
      <FilterWrap>
        <FilterItemPrimary className='pointer'>
          <Whatshot />
          <span>Hot</span>
        </FilterItemPrimary>
        <FilterItemPrimary className='pointer'>
          <span>Everywhere</span>
          <ArrowDropDown />
        </FilterItemPrimary>
        <FilterItemSecondary className='pointer'>
          <NewReleases />
          <span>New</span>
        </FilterItemSecondary>
        <FilterItemSecondary className='pointer'>
          <TrendingUp />
          <span>Top</span>
        </FilterItemSecondary>
        <FilterItemTertiary>
          <MoreHoriz className='pointer' />
        </FilterItemTertiary>
        <SpacerDiv></SpacerDiv>
        <FilterItemMenu className='pointer'>
          <Menu />
          <ArrowDropDown />
        </FilterItemMenu>
      </FilterWrap>
      <PostCard />
    </MainBarWrap>
  );
}

export default Main;
