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
import flag2013 from "../FlagPics/flagWinner2013.jpg";
import flag2014 from "../FlagPics/flagWinner2014.jpg";
import flag2015 from "../FlagPics/flagWinner2015.jpg";
import flag2016 from "../FlagPics/flagWinner2016.jpg";
import flag2017 from "../FlagPics/flagWinner2017.jpg";
import flag2018 from "../FlagPics/flagWinner2018.jpg";
import flag2019 from "../FlagPics/flagWinner2019.jpg";
import flag2020 from "../FlagPics/flagWinner2020.jpg";
import flag2021 from "../FlagPics/flagWinner2021.jpg";

const flagwinners = [
  {
    id: 1,
    name: "Grant Luther",
    course: "Toad Valley",
    year: 2013,
    flagpic: flag2013,
  },
  {
    id: 2,
    name: "Derrick Wiley",
    course: "The Legacy Golf Club",
    year: 2014,
    flagpic: flag2014,
  },
  {
    id: 3,
    name: "Grant Luther",
    course: "Honey Creek Golf Club",
    year: 2015,
    flagpic: flag2015,
  },
  {
    id: 4,
    name: "Derrick Wiley",
    course: "Bos Landen Golf Club",
    year: 2016,
    flagpic: flag2016,
  },
  {
    id: 5,
    name: "Connor Girkin",
    course: "Blue Top Ridge at Riverside",
    year: 2017,
    flagpic: flag2017,
  },
  {
    id: 6,
    name: "Ryan Biegger",
    course: "Tournament Club of Iowa",
    year: 2018,
    flagpic: flag2018,
  },
  {
    id: 7,
    name: "Ryan Biegger",
    course: "Amana Colonies Golf Club",
    year: 2019,
    flagpic: flag2019,
  },
  {
    id: 8,
    name: "Derrick Wiley",
    course: "Whitebirch at Breezy Point",
    year: 2020,
    flagpic: flag2020,
  },
  {
    id: 9,
    name: "Derrick Wiley",
    course: "Quarry Oaks Golf Club",
    year: 2021,
    flagpic: flag2021,
  },
  {
    id: 10,
    name: null,
    course: null,
    year: null,
    flagpic: null,
  },
];

const FlagRecipients = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [openModal6, setOpenModal6] = useState(false);
  const [openModal7, setOpenModal7] = useState(false);
  const [openModal8, setOpenModal8] = useState(false);
  const [openModal9, setOpenModal9] = useState(false);

  return (
    <div className="flagRecipientPage">
      <SiteNavBar />
      <h1 className="flagRecipientHeader">Flag Recipients</h1>
      <div className="flagRecipientLayout">
        {/* {flagwinners.map((flagwinners) => {
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
        })} */}
        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Grant Luther</p>
            <p>Toad Valley</p>
            <p>2013</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2013}
          />
         
          <button className="openModalBtn" onClick={() => setOpenModal1(true)}>
            Scorecard
          </button>
          {openModal1 && <Scorecard1 closeModal1={setOpenModal1} />}

        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Derrick Wiley</p>
            <p>The Legacy Golf Club</p>
            <p>2014</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2014}
          />
          <button className="openModalBtn" onClick={() => setOpenModal2(true)}>
            Scorecard
          </button>
          {openModal2 && <Scorecard2 closeModal1={setOpenModal2} />}
        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Grant Luther</p>
            <p>Honey Creek Golf Club</p>
            <p>2015</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2015}
          />
          <button className="openModalBtn" onClick={() => setOpenModal3(true)}>
            Scorecard
          </button>
          {openModal3 && <Scorecard3 closeModal3={setOpenModal3} />}
        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Derrick Wiley</p>
            <p>Bos Landen Golf Club</p>
            <p>2016</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2016}
          />
          <button className="openModalBtn" onClick={() => setOpenModal4(true)}>
            Scorecard
          </button>
          {openModal4 && <Scorecard4 closeModal4={setOpenModal4} />}
        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Connor Girkin</p>
            <p>Blue Top Ridge at Riverside</p>
            <p>2017</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2017}
          />
          <button className="openModalBtn" onClick={() => setOpenModal5(true)}>
            Scorecard
          </button>
          {openModal5 && <Scorecard5 closeModal5={setOpenModal5} />}
        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Ryan Biegger</p>
            <p>Tournament Club of Iowa</p>
            <p>2018</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2018}
          />
          <button className="openModalBtn" onClick={() => setOpenModal6(true)}>
            Scorecard
          </button>
          {openModal6 && <Scorecard6 closeModal6={setOpenModal6} />}
        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Ryan Biegger</p>
            <p>Amana Colonies Golf Club</p>
            <p>2019</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2019}
          />
          <button className="openModalBtn" onClick={() => setOpenModal7(true)}>
            Scorecard
          </button>
          {openModal7 && <Scorecard7 closeModal7={setOpenModal7} />}
        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Derrick Wiley</p>
            <p>Whitebirch at Breezy Point</p>
            <p>2020</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2020}
          />
          <button className="openModalBtn" onClick={() => setOpenModal8(true)}>
            Scorecard
          </button>
          {openModal8 && <Scorecard8 closeModal8={setOpenModal8} />}
        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Derrick Wiley</p>
            <p>Quarry Oaks Golf Club</p>
            <p>2021</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2021}
          />
          <button className="openModalBtn" onClick={() => setOpenModal9(true)}>
            Scorecard
          </button>
          {openModal9 && <Scorecard9 closeModal9={setOpenModal9} />}
        </div>

      </div>


      {/* <button className="openModalBtn" onClick={() => setOpenModal1(true)}>
        Scorecard
      </button>
      {openModal1 && <Scorecard1 closeModal1={setOpenModal1} />}

      <button className="openModalBtn" onClick={() => setOpenModal2(true)}>
        Scorecard
      </button>
      {openModal2 && <Scorecard2 closeModal2={setOpenModal2} />}

      <button className="openModalBtn" onClick={() => setOpenModal3(true)}>
        Scorecard
      </button>
      {openModal3 && <Scorecard3 closeModal3={setOpenModal3} />}

      <button className="openModalBtn" onClick={() => setOpenModal4(true)}>
        Scorecard
      </button>
      {openModal4 && <Scorecard4 closeModal4={setOpenModal4} />}

      <button className="openModalBtn" onClick={() => setOpenModal5(true)}>
        Scorecard
      </button>
      {openModal5 && <Scorecard5 closeModal5={setOpenModal5} />}

      <button className="openModalBtn" onClick={() => setOpenModal6(true)}>
        Scorecard
      </button>
      {openModal6 && <Scorecard6 closeModal6={setOpenModal6} />}

      <button className="openModalBtn" onClick={() => setOpenModal7(true)}>
        Scorecard
      </button>
      {openModal7 && <Scorecard7 closeModal7={setOpenModal7} />}

      <button className="openModalBtn" onClick={() => setOpenModal8(true)}>
        Scorecard
      </button>
      {openModal8 && <Scorecard8 closeModal8={setOpenModal8} />}

      <button className="openModalBtn" onClick={() => setOpenModal9(true)}>
        Scorecard
      </button>
      {openModal9 && <Scorecard9 closeModal9={setOpenModal9} />}
      <div></div> */}
    </div>
  );
};

export default FlagRecipients;
