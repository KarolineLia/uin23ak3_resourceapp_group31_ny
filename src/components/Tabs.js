import React from "react";
import { useState } from "react";
import CSS from '../NavTabs/CSS'
import HTML from '../NavTabs/HTML'
import { Outlet, Link } from "react-router-dom";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("HTML");
    const handleHTMLTab = () => {
        // update the state to tab1
        setActiveTab("HTML");
      };
      const handleCSStab = () => {
        // update the state to tab2
        setActiveTab("CSS");
      };

  return (
    <div id="category-tabs">
        {/*<ul className="tablinks">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Sanity og CMS</li>
        </ul>*/}
        <Link to="/">
        <button className={activeTab === "HTML" ? "active" : ""} onClick={handleHTMLTab}>HTML</button>
        </Link>
        <Link to="/">
        <button className={activeTab === "CSS" ? "active" : ""} onClick={handleCSStab}>CSS</button>
        </Link>
        <Link to="/">
        <button className={activeTab === "JavaScript" ? "active" : ""} cat-index="JavaScript">JavaScript</button>
        </Link>
        <Link to="/">
        <button className={activeTab === "React" ? "active" : ""} cat-index="React">React</button>
        </Link>
        <Link to="/">
        <button className={activeTab === "Sanity-CMS" ? "active" : ""} cat-index="Sanity-CMS">Sanity og CMS</button>
        </Link>

        <div className="tabcontent">
            {activeTab === "HTML" ? <HTML /> : <CSS />}
        </div>
    </div>
  );
};
export default Tabs;