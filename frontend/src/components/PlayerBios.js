import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/PlayerBios.css";
import jordan from "../FlagPics/jordanBioPic.jpg";
import derrick from "../FlagPics/derrickBioPic.jpg";
import ryan from "../FlagPics/ryanBioPic.png";
import connor from "../FlagPics/connorBioPic.jpg";
import grant from "../FlagPics/grantBioPic.jpg";
import austin from "../FlagPics/austinBioPic.jpg";
import SiteNavBar from './SiteNavBar';


const players = [
    {
      id: 1,
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
      id: 2,
      name: "Derrick Wiley",
      social: [
        {
          twitter: "https://twitter.com/ddubthekid",
          ig: "https://www.instagram.com/derrickwiley_/",
          facebook: "https://www.facebook.com/derrick.wiley.104",
        },
      ],
      age: 28,
      occupation: "UX Engineer at AdCellerant",
      alma_mater: "Iowa State University",
      flag_years: "2014 | 2016 | 2020 | 2021",
      handicap: 19.5,
      boot_years: "0",
      picture: derrick,
    },
    {
      id: 3,
      name: "Ryan Biegger",
      social: [
        {
          twitter: "https://twitter.com/BieggerIsBetter",
          ig: "https://www.instagram.com/ryan_biegger/",
          facebook: "https://www.facebook.com/ryan.biegger",
        },
      ],
      age: 27,
      occupation: "Senior Associate (Accounting) at Embark",
      alma_mater: "University of Northern Iowa",
      flag_years: "2018 | 2019",
      handicap: 13.1,
      boot_years: "2013 | 2016 | 2017",
      picture: ryan,
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
      occupation: "Event Ops Coordinator at ISU Athletics",
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
      occupation: "Int'l Tax Senior Associate at RSM",
      alma_mater: "University of Iowa",
      flag_years: "0",
      handicap: 0.1,
      boot_years: "0",
      picture: austin,
    },
  ];

const PlayerBios = () => {
    

    return (
        <div>
            <SiteNavBar />
        </div>
    )
}

export default PlayerBios