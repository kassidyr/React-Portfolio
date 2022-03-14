import React, { useState } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch, withRouter } from "react-router-dom";
import ProjectOne from "../Assets/Project1.png";
import ProjectTwo from "../Assets/Project2.png";
import ProjectThree from "../Assets/Project3.png";
import MajorProject from "./MajorProject";
import Project from "./project";
import "./skill.css";
const Skills = (props) => {
  const [data, setData] = useState([
    {
      source: ProjectOne,
      title: "BirthdayFunFacts",
      summary: ["An entertainment site to discover interesting facts about your birthday."],
      techs: ["HTML","CSS","JavaScript","Bulma"],
      repo: "https://github.com/kassidyr/project1",
      linktoproject: "https://kassidyr.github.io/project1/",
    },
    {
        source: ProjectTwo,
        title: "Goal Tracker",
        summary: ["An easy-to-use application for creating and tracking goals"],
        techs: ["HTML","CSS","JavaScript","NodeJS","Express","MySQL", "Jest"],
        repo: "https://github.com/kassidyr/Goal-Tracker",
        linktoproject: "https://project-goal-tracker.herokuapp.com/",
      },
      {
        source: ProjectThree,
        title: "spacebook",
        summary: ["A social forum for SpaceX launches"],
        techs: ["HTML","CSS","JavaScript","React","React Bootstrap", "Experss", "NodeJS", "GraphQL", "MongoDB", "bcrypt"],
        repo: "https://github.com/kassidyr/Project-3",
        linktoproject: "https://spacebook-social-network.herokuapp.com/",
      }
  ]);
  if(1===2){
      setData([]);
  }
  return (
    <BrowserRouter>
      <div className="skills">
        <h1 style={{textAlign: 'center'}}>My Projects</h1>
        <div style={{display: "flex",justifyContent: "space-around"}}>
            <Link className="majorProjects" to="/skills/id=1"><MajorProject source={ProjectOne} name="BirthdayFunFacts" /></Link>
            <Link className="majorProjects" to="/skills/id=2"><MajorProject source={ProjectTwo} name="Goal Tracker" /></Link>
            <Link className="majorProjects" to="/skills/id=3"><MajorProject source={ProjectThree} name="spacebook" /></Link>
        </div>
        <Switch>
          <Route path="/skills/id=:id" exact>
            <Project  projects={data}/>
          </Route>
          <Route path="/skills" exact>
            <h2>Select a project for further detail.</h2>
          </Route>
          <Redirect to="/skills"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default withRouter(Skills);
