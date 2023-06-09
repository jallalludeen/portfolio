import React from 'react'

import '../styles/Skills.css'

import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiPython, SiSwift } from 'react-icons/si'

const Skills = () => {
  return (
    <div className='skills'>
      <h2>My Skills Sets</h2>
      <div className="skill">
        <div className="js">
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div className="ts">
          <SiPython />
          <p>python</p>
        </div>
        
        <div className="html">
          <SiHtml5 />
          <p>HTML</p>
        </div>
        <div className="css">
          <SiCss3 />
          <p>CSS</p>
        </div>
        <div className="react">
          <SiReact />
          <p>React</p>
        </div>
        <div className="node">
          <SiNodedotjs />
          <p>Node JS</p>
        </div>
      
        <div className="fire">
          <SiSwift/>
          <p>Swift</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;