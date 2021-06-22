import React, { useState } from "react";
import {
    MenuLink,
    Nav,
    Logo,
    Menu,
    Hamburger,
  } from './Style';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="">
        Blog<span>Site</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/items">Blog List</MenuLink>
        <MenuLink href="/manage-items">Admin</MenuLink>
        <MenuLink href="/create-item">Create Post</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;




