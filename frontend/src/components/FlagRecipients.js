import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/FlagRecipients.css";
import SiteNavBar from "./SiteNavBar";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const flagwinners = [
  {
    id: 1,
    name: "Grant Luther",
    course: "Toad Valley",
    year: 2013,
    flagpic: "https://live.staticflickr.com/65535/51894015063_ba67d2e28f_m.jpg",
  },
  {
    id: 2,
    name: "Derrick Wiley",
    course: "The Legacy Golf Club",
    year: 2014,
    flagpic: "https://live.staticflickr.com/65535/51892968652_04513f3d13_m.jpg",
  },
  {
    id: 3,
    name: "Grant Luther",
    course: "Honey Creek Golf Club",
    year: 2015,
    flagpic: "https://live.staticflickr.com/65535/51892968587_a241095a91_m.jpg",
  },
  {
    id: 4,
    name: "Derrick Wiley",
    course: "Bos Landen Golf Club",
    year: 2016,
    flagpic: "https://live.staticflickr.com/65535/51892968612_0052b67d16_m.jpg",
  },
  {
    id: 5,
    name: "Connor Girkin",
    course: "Blue Top Ridge at Riverside",
    year: 2017,
    flagpic: "https://live.staticflickr.com/65535/51894014963_602370f1db_m.jpg",
  },
  {
    id: 6,
    name: "Ryan Biegger",
    course: "Tournament Club of Iowa",
    year: 2018,
    flagpic: "https://live.staticflickr.com/65535/51894014923_4c9aa596e5_m.jpg",
  },
  {
    id: 7,
    name: "Ryan Biegger",
    course: "Amana Colonies Golf Club",
    year: 2019,
    flagpic: "https://live.staticflickr.com/65535/51894014893_3fc346dc82_m.jpg",
  },
  {
    id: 8,
    name: "Derrick Wiley",
    course: "Whitebirch at Breezy Point",
    year: 2020,
    flagpic: "https://live.staticflickr.com/65535/51893926561_e632133169_m.jpg",
  },
  {
    id: 9,
    name: "Derrick Wiley",
    course: "Quarry Oaks Golf CLub",
    year: 2021,
    flagpic: "https://live.staticflickr.com/65535/51894014833_4e4fe8d27a_m.jpg",
  },
];

const FlagRecipients = () => {
  return (
    <div className="flagRecipientPage">
      <SiteNavBar />
      <h1 className="flagRecipientHeader">Flag Recipients</h1>
      <div className="flagRecipientLayout">
        {flagwinners.map((flagwinners) => {
          return (
            <Card className="flagRecipientCard">
              <CardBody>
                <CardTitle className="flagRecipientTitle">
                  {flagwinners.name} - {flagwinners.course} - {flagwinners.year}
                </CardTitle>
              </CardBody>
              <CardImg
                className="flagRecipientPic"
                alt="flag recipient"
                src={flagwinners.flagpic}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FlagRecipients;
