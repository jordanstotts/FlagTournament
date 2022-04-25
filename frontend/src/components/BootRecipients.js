import React from "react";
import SiteNavBar from "./SiteNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/BootRecipients.css";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import boot2018 from "../FlagPics/bootWinner2018.jpg";
import boot2019 from "../FlagPics/bootWinner2019.jpg";
import boot2020 from "../FlagPics/bootWinner2020.jpg";
import boot2021 from "../FlagPics/bootWinner2021.jpg";
import boot2022 from "../FlagPics/bootWinner2022.jpg";


const bootwinners = [
  {
    id: 1,
    name: "Grant Luther",
    course: "Tournament Club of Iowa",
    year: 2018,
    bootpic: boot2018,
  },
  {
    id: 2,
    name: "Grant Luther",
    course: "Amana Colonies Golf Club",
    year: 2019,
    bootpic: boot2019,
  },
  {
    id: 3,
    name: "Grant Luther",
    course: "Whitebirch at Breezy Point",
    year: 2020,
    bootpic: boot2020,
  },
  {
    id: 4,
    name: "Grant Luther",
    course: "Quarry Oaks Golf Club",
    year: 2021,
    bootpic: boot2021,
  },
  {
    id: 5,
    name: "Derrick Wiley",
    course: "Raven Golf Club",
    year: 2022,
    bootpic: boot2022,
  },
];

const BootRecipients = () => {
  return (
    <div className="bootWinners">
      <SiteNavBar />
      <h1 className="bootHeader">Boot Winners</h1>
      <p className="preBoot">
        *pre boot trophy winners: 2013 - Ryan Biegger | 2014 - Jordan Stotts |
        2015 - Jordan Stotts | 2016 - Ryan Biegger | 2017 - Ryan Biegger
      </p>
      <div className="bootWinnerLayout">
        {bootwinners.map((bootwinners) => {
          return (
            <Card className="bootWinnerCard">
              <CardBody>
                <CardTitle className="bootWinnerTitle">
                  {bootwinners.name} <br /> {bootwinners.course} <br />{" "}
                  {bootwinners.year}
                </CardTitle>
              </CardBody>
              <CardImg
                className="bootWinnerPic"
                alt="boot winner"
                src={bootwinners.bootpic}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default BootRecipients;
