import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

import "./SearchBar.css";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleButtonClick = () => {
    fetch(`http://localhost:7000/vacation?search=${searchQuery}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        navigate("/search-results", { state: { res } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="search-bar" style={{ width: "750px" }}>
      <div className="input-section">
        <div className="location-icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <input
          className="loc"
          type="text"
          placeholder="City, destination or hotel name"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="divider"></div>
        <input className="dt" type="text" placeholder="Date of Stay" />
        <div className="divider"></div>
        <input className="nm" type="number" placeholder="Add guest" />

        <button className="sbt" type="submit" onClick={handleButtonClick}>
          <i className="button-icon fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
