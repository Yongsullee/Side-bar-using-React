/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubMenu = ({ item }) => {
  const [subNav, setSubNav] = useState(false);

  const showSubNav = () => setSubNav(!subNav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav ? showSubNav : null}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        {item.subNav && subNav
          ? item.iconOpened
          : item.subNav
          ? item.iconClosed
          : null}
      </SidebarLink>
      {subNav &&
        item.subNav.map((subItem, index) => {
          return (
            <DropdownLink to={subItem.path} key={index}>
              {subItem.icon}
              <SidebarLabel>{subItem.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &: hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: felx;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &: hover {
    cursor: pointer;
    background: #632ce4;
  }
`;

export default SubMenu;
