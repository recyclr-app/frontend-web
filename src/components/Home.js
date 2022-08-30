import React from "react";

export default function Home() {
  return (
    <>
      <div className="home__container">
        <div className="home__left">
          <img
            src={require("../assets/recycle2.png")}
            alt="recyclr logo"
            className="home__logo"
          />
          <h1 className="home__h1">
            recycl<span className="home__h1--accent">r</span>
          </h1>
          <h2 className="home__h2">
            Reducing, reusing and recycling are the easiest ways to save energy,
            money and natural resources - creating a healthier environment for
            all of us.
          </h2>
          <div className="home__buttons-container">
            <a href="https://appetize.io/app/7fimyzz2riowgfwilohsllz4vy?device=iphone12pro&osVersion=14.5&scale=75">
              <button>
                <span>Demo</span>
              </button>
            </a>
            <br />
            <img
              alt="Find it on the app store"
              src={require("../assets/whiteapplogo.png")}
              className="home__appStore-logo"
            />
          </div>
        </div>
        <img
          src={require("../assets/mockup.png")}
          alt="Hero"
          class="home__hero"
        />
      </div>
      <footer>
        © Copyright recyclr {new Date().getFullYear()}. All Rights Reserved
      </footer>
    </>
  );
}
