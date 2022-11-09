import React from "react";
import Navbar from "../Components/Navbar";
import WelcomeImage from "../assets/home_image.png";
import { HomeContainer } from "../Components/styles/HomeContainer.styled";

function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <main>
        <div className="welcome-image">
          <img src={WelcomeImage} alt="Welcome Image" />
          <h1>Welcome!</h1>
        </div>
        <div className="about">
          <h2>Welcome!</h2>
          <p>
            In 2023, Cory started The Brick Emporium, a wide catalog of
            individual bricks to be purchased by Lego fans all over the world!
            Stop by our shop and take a look at the cool bricks and colors we
            have at <s>low</s> reasonable prices! Stayed tuned for minifigure
            parts coming soon!
          </p>
          <br />
          <p>All orders over $25 have free shipping!</p>
        </div>
      </main>
    </HomeContainer>
  );
}

export default Home;
