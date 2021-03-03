import React from 'react';
import styled from 'styled-components';
import Communities from '../Communities';

const SideBarWrap = styled.div`
  flex: 0.35;
  margin-top: 15px;
  margin-left: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;

function Sidebar() {
  return (
    <SideBarWrap>
      <Communities />
    </SideBarWrap>
  );
}

export default Sidebar;
