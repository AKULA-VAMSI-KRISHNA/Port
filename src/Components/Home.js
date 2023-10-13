import React from 'react'
import './Home.css';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
       {/* <div class="headder">
            <h1>AKULA VAMSI KRISHNA</h1>
        </div> */}
        {/* <div class="menubar"> */}
            {/* <BrowserRouter> */}
            {/* <a href="#"class="abc">Home</a>
            <a href="#"class="abc">Personal Details</a>
            <a href="#"class="abc">Educational Details</a>
            <a href="#"class="abc">Projects</a>
            <a href="#"class="abc">Technical Skills</a>
            <a href="#"class="abc">Certifications</a> */}
            {/* <Link to='/'>
            <a href="#"class="abc">Home</a>
            </Link>
            <Link to='/Personal'>
            <a href="#"class="abc">Personal Details</a>
            </Link>
            <Link to='/Educational'>
            <a href="#"class="abc">Educational Details</a>
            </Link>
            <Link to='/Projects'>
            <a href="#"class="abc">Projects</a>
            </Link>
            <Link to='/Skills'>
            <a href="#"class="abc">Technical Skills</a>
            </Link>
            <Link to='/Certificates'>
            <a href="#"class="abc">Certifications</a>
            </Link> */}
            {/* </BrowserRouter> */}
        {/* </div> */}
        <div className="abcd">
        {/* <img className="image" src="./photo.jpg" alt="my image" height="300px" width="300px"></img> */}
        <div>
        <h1 className="head"><u>About Me</u></h1>
        <p>I am AKULA VAMSI KRISHNA from repalle. I am an B-Tech student with a background of Electrical and Electronics Enginnering. I have done minor degree in Computer Science Engineering. I am a MERN stack developer. I have done many projects based on react and you can go through my projects that are mentioned above. I am eager to work in a company in which the new tallents are encouraged and where i can imoprove my skills in both the ways like communication and technical skills.</p>
        </div>
    </div>
    {/* <div className="footer">
            <span>EmailID:vamsikrishnaakula2@gmail.com </span> &nbsp;&nbsp; <span>Phone:9391728074</span>&nbsp;&nbsp;<span>LinkedIn:AKULA VAMSI KRISHNA</span>
        </div> */}
    </div>
  )
}

export default Home
