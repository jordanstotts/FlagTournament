import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SiteNavBar.css";
import { Nav, NavLink } from "reactstrap";
import flagLogo from "../FlagPics/flagLogo.png";

const SiteNavBar = () => {
  return (
    <div className="siteNavLayout">
      <Nav>
        <NavLink href="/">
          <img src={flagLogo} alt="flag logo" className="flagLogo" />
        </NavLink>
        <div className="links">
        <NavLink className="siteNavLink" href="/PlayerBios">Player Bios</NavLink>
        <NavLink className="siteNavLink" href="/FlagRecipients">Flag Recipients</NavLink>
        <NavLink className="siteNavLink" href="/BootRecipients">Boot Recipients</NavLink>
        <NavLink className="siteNavLink" href="/InsightToNextYear">Insight To Next Year</NavLink>
        <NavLink className="siteNavLink" href="History">History</NavLink>
        <NavLink className="siteNavLink" href="/Rules">Rules</NavLink>
        <NavLink className="siteNavLink" href="/Gallery">Gallery</NavLink>
        </div>
      </Nav>
    </div>
  );
};

export default SiteNavBar;
