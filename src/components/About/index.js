import React from 'react';
import profilePic from "../../assets/images/profile pic.jpg";

function About() {
    return(
    <div class="index, section">
    <img src={profilePic} class="float-left" alt="Kassidy Ralph portrait" />
    <h2 class="about-me">About Me</h2>
    <p>
    Hi, I'm Kassidy. I'm a Web Developer transitioning from a professional background in Financial Planning and Analysis. I have over 5 years experience managing teams and working with executive leadership teams. My diverse experience includes management consulting, financial modeling, and corporate strategy for Fortune 500 companies. While completing my certificate in Full Stack Web Development from the University of Miami Boot Camp I developed a solid foundation in web development including building client-side applications using third-party APIs and creating single-page applications using the MERN stack. I look forward to leveraging my professional experience and technical skills to work as part of an engineering team.
    </p>
 </div>
);
}

export default About;