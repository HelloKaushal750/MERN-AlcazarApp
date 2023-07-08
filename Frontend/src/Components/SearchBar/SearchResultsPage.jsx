import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SearchResultPage.css";
import ShortNavbar from "../Navbar/ShortNavbar";
import { Footer } from "../Footer/Footer";

function SearchResultsPage() {
  const location = useLocation();
  const filteredData = location.state?.res || [];

  return (
    <div>
      <div style={{ backgroundColor: "rgb(28,160,227)" }}>
        <ShortNavbar />
      </div>
      <div className="BoxBox">
        <h1 className="Heading11" style={{color:"black",marginTop:"50px"}}>Search Results</h1>
        <div className="search-results" style={{padding:"20px",paddingTop:"0",paddingBottom:"50px"}}>
          {filteredData.map((product) => (
            <div className="card" key={product.id}>
              <Link to={`/products/${product._id}`}>
                <img src={product.image} alt={product.location} />

                <div className="card-content" style={{display:'flex',justifyContent:"space-between"}}>
                  <div className="location" style={{textAlign:"left"}}>{product.location}</div>
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
