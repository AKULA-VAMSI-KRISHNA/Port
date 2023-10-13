import React from 'react'
import './Skills.css';

function Skills() {
  return (
    <div>
      <h1>My Skills</h1>
      <div className="htm">
        <p>HTML</p>
        <div className="container">
        <div className="skills html">90%</div>
        </div>
        </div>
        <div className="htm">
        <p>CSS</p>
        <div className="container">
        <div className="skills css">80%</div>
        </div>
        </div>
        <div className="htm">
        <p>JavaScript</p>
        <div className="container">
        <div className="skills js">65%</div>
        </div>
        </div>
        <div className="htm">
        <p>Sql</p>
        <div className="container">
        <div className="skills php">80%</div>
        </div>
        </div>
        <div className="htm">
        <p>Python</p>
        <div className="container">
        <div className="skills python">60%</div>
        </div>
        </div>
        <div className="htm">
        <p>Java</p>
        <div className="container">
        <div className="skills java">55%</div>
        </div>
        </div>
    </div>
  )
}

export default Skills
