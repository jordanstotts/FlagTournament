import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/PlayerBios.css";
import jordan from "../FlagPics/jordanBioPic.jpg";
import derrick from "../FlagPics/derrickBioPic.jpg";
import ryan from "../FlagPics/ryanBioPic.png";
import connor from "../FlagPics/connorBioPic.jpg";
import grant from "../FlagPics/bootWinner2021.jpg";
import austin from "../FlagPics/austinBioPic.jpg";
import SiteNavBar from "./SiteNavBar";
import { Card, CardBody, CardTitle, CardText, CardLink } from "reactstrap";

const players = [
  {
    id: 1,
    name: "Derrick Wiley",
    social: [
      {
        twitter: "https://twitter.com/ddubthekid",
        ig: "https://www.instagram.com/derrickwiley_/",
        facebook: "https://www.facebook.com/derrick.wiley.104",
      },
    ],
    age: 28,
    occupation: "Senior UX Engineer",
    alma_mater: "Iowa State University",
    flag_years: "2014 | 2016 | 2020 | 2021",
    handicap: 19.5,
    boot_years: "0",
    picture: derrick,
  },
  {
    id: 2,
    name: "Ryan Biegger",
    social: [
      {
        twitter: "https://twitter.com/BieggerIsBetter",
        ig: "https://www.instagram.com/ryan_biegger/",
        facebook: "https://www.facebook.com/ryan.biegger",
      },
    ],
    age: 27,
    occupation: "CPA | Senior Associate at Embark",
    alma_mater: "University of Northern Iowa",
    flag_years: "2018 | 2019",
    handicap: 13.1,
    boot_years: "2013 | 2016 | 2017",
    picture: ryan,
  },
  {
    id: 3,
    name: "Jordan Stotts",
    social: [
      {
        twitter: "https://twitter.com/JordanStotts15",
        ig: "https://www.instagram.com/jordanstotts15/",
        facebook: "https://www.facebook.com/jordan.stotts",
      },
    ],
    age: 28,
    occupation: "Software Engineer",
    alma_mater: "University of Sioux Falls",
    flag_years: "0",
    handicap: 12.2,
    boot_years: "2014 | 2015",
    picture: jordan,
  },
  {
    id: 4,
    name: "Connor Girkin",
    social: [
      {
        twitter: "https://twitter.com/GirkinOffIsFun",
        ig: "https://www.instagram.com/cgirkin/",
        facebook: "https://www.facebook.com/connor.girkin",
      },
    ],
    age: 28,
    occupation: "Sales Consultant at Willis Auto",
    alma_mater: "University of Iowa",
    flag_years: "2017",
    handicap: 10.3,
    boot_years: "0",
    picture: connor,
  },
  {
    id: 5,
    name: "Grant Luther",
    social: [
      {
        twitter: "https://twitter.com/GrantLuther12",
        ig: "https://www.instagram.com/grantluther12/",
        facebook: "https://www.facebook.com/grant.luther.92",
      },
    ],
    age: 28,
    occupation: "Assoc. Director of Events at ISU Athletics",
    alma_mater: "Iowa State University",
    flag_years: "2013 | 2015",
    handicap: 2.6,
    boot_years: "2018 | 2019 | 2020 | 2021",
    picture: grant,
  },
  {
    id: 6,
    name: "Austin Howe",
    social: [
      {
        twitter: "https://twitter.com/AustinKnowsHowe",
        ig: "https://www.instagram.com/austinhowe2/",
        facebook: "https://www.facebook.com/profile.php?id=1816414823",
      },
    ],
    age: 28,
    occupation: "CPA | Int'l Tax Senior Assoc. at RSM",
    // occupation: "Int'l Tax Senior Associate at RSM",
    alma_mater: "University of Iowa",
    flag_years: "0",
    handicap: 0.1,
    boot_years: "0",
    picture: austin,
  },
];

const PlayerBios = () => {
  return (
      <div className="playerBioPage">
        <SiteNavBar />
      <div className="playerBioLayout">
        <h1 className="playerBioHeader">Player Bios</h1>
        <div className="bio">
          {players.map((players) => {
            return (
              <Card className="playerCards">
                <CardBody>
                  <CardTitle className="bioPlayerName">
                    {players.name}
                  </CardTitle>
                  <img
                    className="bioPic"
                    src={players.picture}
                    alt="profile pic"
                  />
                  <div className="socials">
                    <CardLink href={players.social[0].twitter}>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                        className="socialIcon"
                        alt="twitter"
                      />
                    </CardLink>
                    <CardLink href={players.social[0].ig}>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                        className="socialIcon"
                        alt="instagram"
                      />
                    </CardLink>
                    <CardLink href={players.social[0].facebook}>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                        className="socialIcon"
                        alt="facebook"
                      />
                    </CardLink>
                  </div>
                </CardBody>
                <CardBody className="playerCardBody">
                  <CardText className="bioInfo">
                    <ul className="bioInfoList">
                      <p className="playerInfo">
                        <strong>Age: </strong>
                        <div className="bioListDetail">{players.age}</div>
                      </p>
                      <p className="playerInfo">
                        <strong>Occupation: </strong>
                        <div className="bioListDetail">{players.occupation}</div>
                      </p>
                      <p className="playerInfo">
                        <strong>Alma Mater: </strong>
                        <div className="bioListDetail">{players.alma_mater}</div>
                      </p>
                      <p className="playerInfo">
                        <strong>Flag Years: </strong>
                        <div className="bioListDetail">{players.flag_years}</div>
                      </p>
                      <p className="playerInfo">
                        <strong>Boot Years: </strong>
                        <div className="bioListDetail">{players.boot_years}</div>
                      </p>
                      <p className="playerInfo">
                        <strong>Handicap: </strong>
                        <div className="bioListDetail">{players.handicap}</div>
                      </p>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlayerBios;
