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
import flagLogo from "../FlagPics/flagLogo.png";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="homeLayout">
      <div>
        <Navbar color="faded" light>
          <NavbarToggler className="hamburger" onClick={() => setIsOpen(!isOpen)} />
          <NavbarBrand className="homeHeader" href="/">
            <p className="homeHeaderWords">The Annual "Where's My Ball" Tournament</p>
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem className="homeNavDropdown">
                <NavLink id="dropdownWords" href="/PlayerBios">Player Bios</NavLink>
              </NavItem>
              <NavItem className="homeNavDropdown">
                <NavLink id="dropdownWords" href="/FlagRecipients">
                  Flag Recipients
                </NavLink>
              </NavItem>
              <NavItem className="homeNavDropdown">
                <NavLink id="dropdownWords" href="/BootRecipients">
                  Boot Recipients
                </NavLink>
              </NavItem>
              <NavItem className="homeNavDropdown">
                <NavLink id="dropdownWords" href="/InsightToNextYear">
                  Insight To Next Year
                </NavLink>
              </NavItem>
              <NavItem className="homeNavDropdown">
                <NavLink id="dropdownWords" href="/History">
                  History
                </NavLink>
              </NavItem>
              <NavItem className="homeNavDropdown">
                <NavLink id="dropdownWords" href="/Rules">
                  Rules
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <img src={flagLogo} alt='flag logo' className="homeFlagLogo" />
      <p className="homeFlagQuote">It's not about winning the tournament, it's about making sure you don't lose</p>
    </div>
  );
};

export default Home;
