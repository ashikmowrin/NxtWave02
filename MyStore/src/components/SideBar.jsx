import React, { useState } from "react";
import "../css/SideBar.css";

const SideBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <div className="sidenav">
   
      <button
        className={`dropdown-btn ${openDropdown === "idealFor" ? "active" : ""}`}
        onClick={() => toggleDropdown("idealFor")}
      >
        IDEAL FOR <img className="drop-icon" src="/down-arrow.svg"/>
        <i className="fa fa-caret-down"></i>
      </button>
      <div
        className="dropdown-container"
        style={{ display: openDropdown === "idealFor" ? "block" : "none" }}
      >
        <label><input type="checkbox" /> Men</label>
        <label><input type="checkbox" /> Woman</label>
        <label><input type="checkbox" /> All</label>
      </div>

   
      <button
        className={`dropdown-btn ${openDropdown === "occasion" ? "active" : ""}`}
        onClick={() => toggleDropdown("occasion")}
      >
        OCCASION <img className="drop-icon" src="/down-arrow.svg"/>
        <i className="fa fa-caret-down"></i>
      </button>
      <div
        className="dropdown-container"
        style={{ display: openDropdown === "occasion" ? "block" : "none" }}
      >
        <label><input type="checkbox" /> PARTY</label>
        <label><input type="checkbox" /> WEDDING</label>
        <label><input type="checkbox" /> MEETING</label>
        <label><input type="checkbox" /> CASUAL</label>
      </div>

  
      <button
        className={`dropdown-btn ${openDropdown === "segment" ? "active" : ""}`}
        onClick={() => toggleDropdown("segment")}
      >
        SEGMENT <img className="drop-icon" src="/down-arrow.svg"/>
        <i className="fa fa-caret-down"></i>
      </button>
      <div
        className="dropdown-container"
        style={{ display: openDropdown === "segment" ? "block" : "none" }}
      >
        <label><input type="checkbox" /> MEN'S WEAR</label>
        <label><input type="checkbox" /> WOMAN'S WEAR</label>
        <label><input type="checkbox" /> KID'S WEAR</label>
      </div>

  
      <button
        className={`dropdown-btn ${openDropdown === "suitableFor" ? "active" : ""}`}
        onClick={() => toggleDropdown("suitableFor")}
      >
        SUITABLE FOR <img className="drop-icon" src="/down-arrow.svg"/>
        <i className="fa fa-caret-down"></i>
      </button>
      <div
        className="dropdown-container"
        style={{ display: openDropdown === "suitableFor" ? "block" : "none" }}
      >
        <label><input type="checkbox" /> CASUAL WEAR</label>
        <label><input type="checkbox" /> OFFICE WEAR</label>
        <label><input type="checkbox" /> EVENING WEAR</label>
      </div> 

      <button
        className={`dropdown-btn ${openDropdown === "rawMaterial" ? "active" : ""}`}
        onClick={() => toggleDropdown("rawMaterial")}
      >
        RAW MATERIAL <img className="drop-icon" src="/down-arrow.svg"/>
        <i className="fa fa-caret-down"></i>
      </button>
      <div
        className="dropdown-container"
        style={{ display: openDropdown === "rawMaterial" ? "block" : "none" }}
      >
        <label><input type="checkbox" /> COTTON</label>
        <label><input type="checkbox" /> LINEN</label>
        <label><input type="checkbox" /> POLYESTER</label>
      </div>

      <button
        className={`dropdown-btn ${openDropdown === "pattern" ? "active" : ""}`}
        onClick={() => toggleDropdown("pattern")}
      >
        PATTERN <img className="drop-icon" src="/down-arrow.svg"/>
        <i className="fa fa-caret-down"></i>
      </button>
      
      <div
        className="dropdown-container"
        style={{ display: openDropdown === "pattern" ? "block" : "none" }}
      >
        <label><input type="checkbox" /> CHECKED</label>
        <label><input type="checkbox" /> PLAIN</label>
        <label><input type="checkbox" /> FLORAL</label>
        <label><input type="checkbox" /> RANDOM</label>
      </div>
    </div>
  );
};

export default SideBar;
