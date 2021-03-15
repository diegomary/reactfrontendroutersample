// USE THE FOLLOWING COMMAND TO GENERATE SKELETON OF COMPONENTS
// npx generate-react-cli component Users

import React, { useRef } from "react";
import './About.css';

const About = (props) => {

  const demoRef = useRef(null);
  const demo = (event) => { alert(demoRef.current.innerHTML);}

  return (
  <div className="About" data-testid="About">
  
    <p>{props.init}</p>

    <button ref = {demoRef} onClick={demo} >Click to see the ref sample</button>
  </div>
)};


export default About;
