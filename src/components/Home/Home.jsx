import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
const Home = () => {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="inner-text-left">
          <span className="welcome">Welcome to my World</span>
          <div className="typewriter">
            <h1 className="title">I'm Gurpreet Singh</h1>
            <span>
              <Typewriter
                words={[
                  "JAVASCRIPT DEVELOPER",
                  "MERN STACK DEV",
                  "NODEJS DEVELOPER",
                  "REACTJS DEVELOPER",
                  "NEXTJS DEVELOPER",
                  "GATSBY DEVELOPER",
                  "REACTNATIVE MOBILE APP DEV",
                  "MEVN STACK DEV",
                  "MEAN STACK DEV",
                  "BLOCKCHAIN DEV",
                  "WEB3.0 DEV",
                  "NFT DEVELOPER"
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={70}
                delaySpeed={3000}
              />
            </span>
            <h2>live in INDIA</h2>
          </div>
          <div class="upwork-profile">
            <button>Know More</button>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
