import React from "react";
import { Link } from "react-router-dom";

function Tabs () {
      const handleClick = event => {
    
        const buttonElements = document.querySelectorAll("nav li");
        buttonElements.forEach((element) => {
            element.classList.replace("active", "inactive");
        });
    
        event.currentTarget.classList.add('active')
      }

  return (
    <div id="category-tabs">
        <Link to="/html">
        <li className="inactive" onClick={handleClick}>HTML</li>
        </Link>
        <Link to="/css">
        <li className="inactive" onClick={handleClick}>CSS</li>
        </Link>
        <Link to="/javascript">
        <li className="inactive" onClick={handleClick}>JavaScript</li>
        </Link>
        <Link to="/react">
        <li className="inactive" onClick={handleClick}>React</li>
        </Link>
        <Link to="/sanity">
        <li className="inactive" onClick={handleClick}>Sanity og CMS</li>
        </Link>
    </div>
  );
};
export default Tabs;