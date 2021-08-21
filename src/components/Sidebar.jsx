/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarData from './SidebarData';

const Sidebar = () => {
  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars />
        </NavIcon>
      </Nav>
    </>
  );
};

const Nav = styled.div`
  background: #15171c;
  hegiht: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
`;

export default Sidebar;
