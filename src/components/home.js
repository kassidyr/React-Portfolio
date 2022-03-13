import React from "react";

const Home = ({ name, paragraph, myImage }) => {
  return (
      <div className="home_container">
        <div className="home_head_wrapper">
          <h1>
            {" "}
            Hello, I'm <br></br> <span>{name}</span>
          </h1>
          <p>{paragraph}</p>
        </div>
        <div className="image_container">
          <img src={myImage} alt="Kassidy Ralph"></img>
          <div className="bg"></div>
        </div>
      </div>
  );
};

export default Home;
