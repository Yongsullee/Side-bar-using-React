/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarData from './SidebarData';
import SubMenu from './SubMenu';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const sidebarVisible = () => setShowSidebar(!showSidebar);

  return (
    <div>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={sidebarVisible} />
        </NavIcon>
      </Nav>
      <SidebarNav showSidebar={showSidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={sidebarVisible} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  hegiht: 100%;
  overflow: scroll;
`;

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ showSidebar }) => (showSidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

export default Sidebar;
