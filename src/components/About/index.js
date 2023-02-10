import React from "react";
import image from '../../assets/images/Me.png';

function About() {
    return (
        <div>
            <div>
            <h1>About Me</h1>
            </div>
            <div id="background">
            <div id="about">
            <img id="image" src={image} alt="Ema Halimi" />
            <p id="about-me">
            Highly motivated and detail-oriented Full Stack Web Developer with a strong background in Software Engineering and Networking. 
            Committed to lifelong learning, bringing a unique blend of creativity and problem-solving skills to develop user-friendly applications. 
            Recognized for my quick wit and attention to detail, can easily deliver complex projects.
            </p>
            </div>
            </div>
        </div>
    );
}

export default About;