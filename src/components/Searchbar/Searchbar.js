import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';

const SearchWrap = styled.div`
  position: relative;
  display: flex;
  flex-grow: 2;
  justify-content: center;

  & label {
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 10px;
  }

  & input {
    padding: 10px;
    padding-left: 40px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    background-color: ${(p) => p.theme.searchbarBg};
    width: 70%;
    max-width: 600px;
  }

  & input:hover {
    border-color: ${(p) => p.theme.primaryColor};
    background-color: ${(p) => p.theme.secondaryColor};
  }

  .searchPositioning {
    padding: 0 20px;
    flex-grow: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

function Searchbar() {
  return (
    <SearchWrap>
      <div className='searchPositioning'>
        <label htmlFor='searchbar'>
          <IconContext.Provider value={{ color: '#828282' }}>
            <BsSearch />
          </IconContext.Provider>
        </label>

        <input id='searchbar' placeholder='Search' />
      </div>
    </SearchWrap>
  );
}

export default Searchbar;
