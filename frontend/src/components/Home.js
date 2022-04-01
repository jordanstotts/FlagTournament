import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import flagLogo from '../FlagPics/flagLogo.png'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <Navbar color="faded" light>
          <NavbarToggler className="me-2" onClick={() => setIsOpen(!isOpen)} />
          <NavbarBrand className="me-auto" href="/">
            The Annual "Where's My Ball" Tournament
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Player Bios</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Flag Recipients
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Boot Recipients
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Insight To Next Year
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  History
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Rules
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <img src={flagLogo} />
    </>
  );
};

export default Home;
