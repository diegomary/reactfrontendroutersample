// USE THE FOLLOWING COMMAND TO GENERATE SKELETON OF COMPONENTS
// npx generate-react-cli component Users

import React, { useState, useEffect} from "react";
import './Home.css';

const Home = (props) => {
  
  
  const [resizer,setResizer] = useState(1.8);


  useEffect(() => {
      window.addEventListener('resize', handleResize);
      setResizer(window.innerWidth * 1.8 /1920);
      return () => { //cleanup
         window.removeEventListener('resize', handleResize);};}
  ,[]);


  const handleResize = (event)=> { setResizer(window.innerWidth * 1.8 /1920) };

  
  return (

  <div className="Home" data-testid="Home">   
    <p>{props.init}</p>
    <p>{resizer}</p>
  </div>
)};


export default Home;
