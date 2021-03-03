import React from 'react';
import { PageLayout } from '../components/PageLayout';
import styled from 'styled-components';
import Trending from '../components/Trending';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar/Sidebar';

const BarsWrap = styled.div`
  margin: 0px 5px;
  margin-top: 15px;

  & span {
    font-size: 14px;
    font-weight: 600;
  }
`;

const FlexContainer = styled.div`
  display: flex;
`;

export default function Home() {
  return (
    <PageLayout>
      <Trending />
      <BarsWrap>
        <span>Popular posts</span>
        <FlexContainer>
          <Main />
          <Sidebar />
        </FlexContainer>
      </BarsWrap>
    </PageLayout>
  );
}
