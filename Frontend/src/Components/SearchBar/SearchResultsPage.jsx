import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SearchResultPage.css";
import ShortNavbar from "../Navbar/ShortNavbar";
import { Footer } from "../Footer/Footer";

function SearchResultsPage() {
  const location = useLocation();
  const filteredData = location.state?.filteredData || [];

  return (
    <div>
      <div style={{ backgroundColor: "rgb(28,160,227)" }}>
        <ShortNavbar />
      </div>
      <div className="BoxBox">
        <h1 className="Heading11">Search Results</h1>
        <div className="search-results">
          {filteredData.map((product) => (
            <div className="card" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.location} />

                <div className="card-content">
                  <div className="location">{product.location}</div>
                  <div className="price">{product.price}</div>
                </div>
              </Link>
              <hr className="line" />
              <p>
                <div className="dsp">{product.description}</div>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchResultsPage;
