import React from 'react';
import birthdayFunFacts from "../../assets/images/BirthdayFunFacts.png";
import goalTracker from "../../assets/images/GoalTracker.png";
import spacebook from "../../assets/images/spacebook.png";

function Work() {
    return(
        <div class="index, section2">
        <h2>Work</h2>
        <img src={birthdayFunFacts} class="work-image" alt="Birthday Fun Facts" />
        <p>   
            <a href="https://kassidyr.github.io/project1/" id="projects">BirthdayFunFacts</a><br/>
            An entertainment web application that utilizes server-side APIs to provide motivation and interesting facts about a user's birthday
        </p>
        <br></br>
        <img src={goalTracker} class="work-image" alt="Goal Tracker" />
        <p>
            <a href="https://glacial-everglades-31515.herokuapp.com/" id="projects">Goal Tracker</a><br/>
            An easy-to-use application for creating and tracking goals
        </p>
        <br></br>
        <img src={spacebook} class="work-image" alt="spacebook" />
        <p>
            <a href="https://spacebook-social-network.herokuapp.com/" id="projects">spacebook</a><br/>
            A web application that provides users with information regarding SpaceX launches and allows them to add comments and replies to the listed launch events
        </p>
     </div>  
    );
}

export default Work;