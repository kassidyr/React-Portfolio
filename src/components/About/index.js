import React from 'react';
import profilePic from "../../assets/images/profile pic.jpg";

function About() {
    return(
    <div class="index, section">
    <img src={profilePic} class="float-left" alt="Kassidy Ralph portrait" />
    <h2>About Me</h2>
    <p>
        I am a Financial Planning and Analysis Manager transitioning into a Web Developer role after completing the University of Miami Coding Boot Camp. I have over 5 years experience managing teams and working with executive leadership teams. My diverse experience includes management consulting, financial modeling, and corporate strategy for Fortune 500 companies.
    </p>
 </div>
);
}

export default About;