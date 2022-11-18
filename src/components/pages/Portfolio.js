import React from "react";

import vanGame from "../../assets/images/itchBanner.png";
import memoryGame from "../../assets/images/memoryGame.png";
import notInsta from "../../assets/images/not-insta.png";
import pokeGiphy from "../../assets/images/poke-giphy.png";
import BBPortfolioSite from "../../assets/images/BB_PortfolioSite.png";
import flower1 from "../../assets/images/flowers.jpg";
import flower2 from "../../assets/images/flower2.jpg";
import flower3 from "../../assets/images/flower3.jpg";

// import gitHubPic from '../../assets/images/GitHub-Mark.png';
import { FaGithub, FaSteam } from "react-icons/fa";

const style = {
  imgStyle: {
    // width: '100%',
    // height: '50%',
    // background: 'transparent',
    // fill: "50%",
    // 'margin-bottom': '-200px',
  },
  logoStyle: {
    width: "25px",
    height: "25px",
    "margin-bottom": "4px",
  },
};

export default function Blog() {
  let iconStyle = {
    color: "black",
    fontSize: "0.8em",
    "margin-bottom": "4px",
    "margin-left": "4px",
  };
  return (
    <div className="p-3">
      <h5>Portfolio</h5>
      <div className="row gx-2">
        <div className="col-sm-3" style={style.imgStyle}>
          <div className="p-1">
            <img
              src={vanGame}
              alt="the van game pic"
              className="img-thumbnail"
              style={{ height: "100%", width: "100%" }}
            />
            <h3>
              <a href="https://store.steampowered.com/app/2081860/The_Van_Game/">
                The Van Game
                <FaSteam style={iconStyle} />
              </a>
              <br></br>
            </h3>
            <p>
              My first "real" game, basically the classic Oregon Trail but in a
              van. Self-published on Steam. I hired/directed a couple artists
              and a muscician, all the code was done solo.
            </p>
          </div>
        </div>

        <div className="col-sm-3" style={style.imgStyle}>
          <div className="p-1">
            <img
              src={memoryGame}
              alt="memory game pic"
              className="img-thumbnail"
              style={{ height: "100%", width: "100%" }}
            />
            <h3>
              <a href="https://github.com/BBelk/Memory-Game">
                React Memory Game
                <FaGithub style={iconStyle} />
              </a>
              <br></br>
            </h3>
            <p>
              A simple memory game made in react. Users can sign up, log in, and store their highscores on a MongoDB server. Full MERN stack.
            </p>
          </div>
        </div>

        <div className="col-sm-3" style={style.imgStyle}>
          <div className="p-1">
            <img
              src={notInsta}
              alt="not-insta pic"
              className="img-thumbnail"
              style={{ height: "100%", width: "100%" }}
            />
            <h3>
              <a href="https://github.com/BBelk/Not-Insta">
                Not-Insta
                <FaGithub style={iconStyle} />
              </a>
              <br></br>
            </h3>
            <p>
              An instagram clone. Users can sign-up, posts pictures (stored in cloudinary), and comments/like photos. Uses handlebars.js for page views, heroku/jawsDB for server.
            </p>
          </div>
        </div>

        <div className="col-sm-3" style={style.imgStyle}>
          <div className="p-1">
            <img
              src={pokeGiphy}
              alt="pokemon-gipy pic"
              className="img-thumbnail"
              style={{ height: "100%", width: "100%" }}
            />
            <h3>
              <a href="https://github.com/BBelk/Pokemon-Giphy-API">
                Pokemon-Giphy
                <FaGithub style={iconStyle} />
              </a>
              <br></br>
            </h3>
            <p>
              A site that pulls data from the RESTful APIs of PokeAPI and Giphy. Users type in a pokemons name and it pulls up their official images and information, and well as a collection of gifs from Giphy. Mostly Javascript, hosted on a GitHub Page.
            </p>
          </div>
        </div>

        <div className="col-sm-3" style={style.imgStyle}>
          <div className="p-1">
            <img
              src={BBPortfolioSite}
              alt="this same website pic"
              className="img-thumbnail"
              style={{ height: "100%", width: "100%" }}
            />
            <h3>
              <a href="https://github.com/BBelk/Portfolio">
                This website!
                <FaGithub style={iconStyle} />
              </a>
              <br></br>
            </h3>
            <p>
              This website is made with React, and includes a pretty neat MailChimp signup form and a contact form that actually works. Pretty neat if I do say so myself.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
