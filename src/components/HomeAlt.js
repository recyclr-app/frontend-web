import React from "react";

export default function HomeAlt() {
  return (
    <div className="alt__container">
      <h1 className="home__h1">
        recycl<span className="home__h1--accent">r</span>
      </h1>
      <h2 className="home__h2">
        Reducing, reusing and recycling are the easiest ways to save energy,
        money and natural resources - creating a healthier environment for all
        of us.
      </h2>

      <div className="alt__hero-container" s>
        <img
          alt="Find it on the app store"
          src={require("../assets/shots.png")}
          className="alt__shots"
        />
      </div>
      <div className="alt__demo-container">
        <a href="https://appetize.io/app/4d65avcuv7tvcl4ruibauomqm4?device=iphone12promax&osVersion=14.5&scale=75">
          <button className="alt__demo-button">
            <span>Demo</span>
          </button>
        </a>
        <br />
      </div>
      <div className="alt__hero-container" s>
        <img
          alt="Find it on the app store"
          src={require("../assets/hero.png")}
          className="alt__hero"
        />
      </div>
      <footer>
        Coming Soon to the app store.
        <br />
        <img
          alt="Find it on the app store"
          src={require("../assets/whiteapplogo.png")}
          className="alt__appStore-logo"
        />
        <br />© Copyright recyclr {new Date().getFullYear()}. All Rights
        Reserved
      </footer>
    </div>
  );
}
