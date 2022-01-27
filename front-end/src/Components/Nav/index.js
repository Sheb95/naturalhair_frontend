import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
   return (
      <nav>
         <li>
            <Link to="/">Home</Link>
         </li>
         <li>
            <Link to="/about">About</Link>
         </li>
         <li>
            <Link to="/submit">Submit a hairstyle</Link>
         </li>
      </nav>
   );
};

export default NavigationBar;
