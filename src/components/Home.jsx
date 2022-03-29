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
                  "Javascript Developer",
                  "Mern Stack Dev",
                  "NodeJs Developer",
                  "ReactJs Developer",
                  "NextJs Developer",
                  "Gatsby Developer",
                  "ReactNative Mobile App Dev",
                  "Mevn Stack Dev",
                  "Mean Stack Dev",
                  "BlockChain Dev",
                  "Web3.0 Dev",
                  "NFT developer"
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
            <button>Upwork Profile</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
