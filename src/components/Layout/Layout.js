// USE THE FOLLOWING COMMAND TO GENERATE SKELETON OF COMPONENTS
// npx generate-react-cli component Users

import React from 'react';
import './Layout.css';
import { Link } from "react-router-dom";

const Layout = (props) => (
  <div className="Layout" data-testid="Layout">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
    {props.children}
    <footer>This is the footer</footer>
  </div>
);



export default Layout;
