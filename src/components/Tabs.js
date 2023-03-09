import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    </div>
  );
};
export default Tabs;