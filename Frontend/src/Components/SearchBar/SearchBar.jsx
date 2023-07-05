import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dbData from '../../db.json';
import "./SearchBar.css";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = dbData.filter((item) =>
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleButtonClick = () => {
    navigate('/search-results', { state: { filteredData } });
  };

  return (
    <div className="search-bar">
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
        <input className="dt" type="text"  placeholder="Date of Stay" />
        <div className="divider"></div>
        <input className="nm" type="number"  placeholder="Add guest" />
        <button className="sbt" type="submit" onClick={handleButtonClick}>
          <i className="button-icon fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
