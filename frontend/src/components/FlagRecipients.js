import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/FlagRecipients.css";
import SiteNavBar from "./SiteNavBar";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import Scorecard1 from "./scorecardModals/Scorecard1";
import Scorecard2 from "./scorecardModals/Scorecard2";
import Scorecard3 from "./scorecardModals/Scorecard3";
import Scorecard4 from "./scorecardModals/Scorecard4";
import Scorecard5 from "./scorecardModals/Scorecard5";
import Scorecard6 from "./scorecardModals/Scorecard6";
import Scorecard7 from "./scorecardModals/Scorecard7";
import Scorecard8 from "./scorecardModals/Scorecard8";
import Scorecard9 from "./scorecardModals/Scorecard9";

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
const [openModal1, setOpenModal1] = useState(false)
const [openModal2, setOpenModal2] = useState(false)
const [openModal3, setOpenModal3] = useState(false)
const [openModal4, setOpenModal4] = useState(false)
const [openModal5, setOpenModal5] = useState(false)
const [openModal6, setOpenModal6] = useState(false)
const [openModal7, setOpenModal7] = useState(false)
const [openModal8, setOpenModal8] = useState(false)
const [openModal9, setOpenModal9] = useState(false)

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
        <button className="openModalBtn" onClick={() => setOpenModal1(true)} >
            Scorecard
        </button>
        {openModal1 && <Scorecard1 closeModal1={setOpenModal1} />}

        <button className="openModalBtn" onClick={() => setOpenModal2(true)} >
            Scorecard
        </button>
        {openModal2 && <Scorecard2 closeModal1={setOpenModal2} />}

        <button className="openModalBtn" onClick={() => setOpenModal3(true)} >
            Scorecard
        </button>
        {openModal3 && <Scorecard3 closeModal1={setOpenModal3} />}

        <button className="openModalBtn" onClick={() => setOpenModal4(true)} >
            Scorecard
        </button>
        {openModal4 && <Scorecard4 closeModal1={setOpenModal4} />}

        <button className="openModalBtn" onClick={() => setOpenModal5(true)} >
            Scorecard
        </button>
        {openModal5 && <Scorecard5 closeModal1={setOpenModal5} />}

        <button className="openModalBtn" onClick={() => setOpenModal6(true)} >
            Scorecard
        </button>
        {openModal6 && <Scorecard6 closeModal1={setOpenModal6} />}

        <button className="openModalBtn" onClick={() => setOpenModal7(true)} >
            Scorecard
        </button>
        {openModal7 && <Scorecard7 closeModal1={setOpenModal7} />}

        <button className="openModalBtn" onClick={() => setOpenModal8(true)} >
            Scorecard
        </button>
        {openModal8 && <Scorecard8 closeModal1={setOpenModal8} />}

        <button className="openModalBtn" onClick={() => setOpenModal9(true)} >
            Scorecard
        </button>
        {openModal9 && <Scorecard9 closeModal1={setOpenModal9} />}

      </div>
    </div>
  );
};

export default FlagRecipients;
