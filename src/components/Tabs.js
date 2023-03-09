import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Tabs () {
    const [activeTab, setActiveTab] = useState("HTML");
    const handleHTMLTab = () => {
        setActiveTab("HTML");
      };
      const handleCSSTab = () => {
        setActiveTab("CSS");
      };
      const handleJavaTab = () => {
        setActiveTab("JavaScript");
      };
      const handleReactTab = () => {
        setActiveTab("React");
      };
      const handleSanityTab = () => {
        setActiveTab("Sanity-CMS");
      };
      {/*Kilder: https://blog.logrocket.com/how-to-build-tab-component-react/ og https://ariakit.org/examples/tab-react-router*/}

  return (
    <div id="category-tabs">
        <Link to="/html">
        <button className={activeTab === "HTML" ? "active" : ""} onClick={handleHTMLTab}>HTML</button>
        </Link>
        <Link to="/css">
        <button className={activeTab === "CSS" ? "active" : ""} onClick={handleCSSTab}>CSS</button>
        </Link>
        <Link to="/javascript">
        <button className={activeTab === "JavaScript" ? "active" : ""} onClick={handleJavaTab}>JavaScript</button>
        </Link>
        <Link to="/react">
        <button className={activeTab === "React" ? "active" : ""} onClick={handleReactTab}>React</button>
        </Link>
        <Link to="/sanity">
        <button className={activeTab === "Sanity-CMS" ? "active" : ""} onClick={handleSanityTab}>Sanity og CMS</button>
        </Link>
    </div>
    /*Kilder: https://blog.logrocket.com/how-to-build-tab-component-react/ og https://ariakit.org/examples/tab-react-router*/
  );
};
export default Tabs;