import React, { useState } from "react";
import data from "../../db.json";
import "./ProductList.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState(data.slice(0, 6));
  const [totalPages, setTotalPages] = useState(Math.ceil(data.length / 6));
  const itemsPerPage = 6;
  const [selectedFilter, setSelectedFilter] = useState("All");

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const indexOfLastItem = pageNumber * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentItems(filteredItems.slice(indexOfFirstItem, indexOfLastItem));
  };

  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCardExpansion = (cardId) => {
    if (expandedCards.includes(cardId)) {
      setExpandedCards(expandedCards.filter((id) => id !== cardId));
    } else {
      setExpandedCards([...expandedCards, cardId]);
    }
  };

  const isCardExpanded = (cardId) => expandedCards.includes(cardId);

  const [filteredItems, setFilteredItems] = useState(data);

  const filterItems = (filterType) => {
    let filteredItems = [...data];

    if (filterType === "All") {
      setSelectedFilter(filterType);
      setCurrentPage(1);
      setCurrentItems(filteredItems.slice(0, itemsPerPage));
    } else if (filterType === "Trending") {
      filteredItems = filteredItems.filter((item) => item.id % 3 === 0);
      setSelectedFilter(filterType);
      setCurrentPage(1);
      setCurrentItems(filteredItems.slice(0, itemsPerPage));
    } else if (filterType === "Popular") {
      filteredItems = filteredItems.filter((item) => item.id % 4 === 0);
      setSelectedFilter(filterType);
      setCurrentPage(1);
      setCurrentItems(filteredItems.slice(0, itemsPerPage));
    } else if (filterType === "Features") {
      filteredItems = filteredItems.filter((item) => item.id % 6 === 0);
      setSelectedFilter(filterType);
      setCurrentPage(1);
      setCurrentItems(filteredItems.slice(0, itemsPerPage));
    } else if (filterType === "Recommend") {
      setSelectedFilter(filterType);
      filteredItems.sort((a, b) => {
        const priceA = parseInt(a.price.replace("$", ""));
        const priceB = parseInt(b.price.replace("$", ""));
        return priceA - priceB;
      });
      setCurrentPage(1);
      setCurrentItems(filteredItems.slice(0, itemsPerPage));
    } else if (filterType === "Tour Packages") {
      setSelectedFilter(filterType);
      filteredItems.sort((a, b) => {
        const priceA = parseInt(a.price.replace("$", ""));
        const priceB = parseInt(b.price.replace("$", ""));
        return priceB - priceA;
      });
      setCurrentPage(1);
      setCurrentItems(filteredItems.slice(0, itemsPerPage));
    }

    setFilteredItems(filteredItems);

    const newTotalPages = Math.ceil(filteredItems.length / itemsPerPage);
    setTotalPages(newTotalPages);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageOptions = 3;

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    const previousPage = currentPage - 1;
    const nextPage = currentPage + 1;

    return (
      <div className="pagination">
        <div className="round-button first-page" onClick={() => paginate(1)}>
          First Page
        </div>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`page-number ${
              currentPage === pageNumber ? "active" : ""
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <div
          className="round-button last-page"
          onClick={() => paginate(totalPages)}
        >
          Last Page
        </div>
      </div>
    );
  };

  return (
    <div className="BoxBox">
      <div className="headingA">
        <h1>Guides for your next vacation</h1>
        <h5 className="headingb">
          Check out this week's selection of popular products that might catch
          your eye, and don't
        </h5>
      </div>
      <div className="filter-buttons">
        <button
          className={`filter-buttonA ${
            selectedFilter === "All" ? "active" : ""
          }`}
          onClick={() => filterItems("All")}
        >
          All
        </button>
        <button
          className={`filter-button ${
            selectedFilter === "Trending" ? "active" : ""
          }`}
          onClick={() => filterItems("Trending")}
        >
          Trending
        </button>
        <button
          className={`filter-button ${
            selectedFilter === "Popular" ? "active" : ""
          }`}
          onClick={() => filterItems("Popular")}
        >
          Popular
        </button>
        <button
          className={`filter-button ${
            selectedFilter === "Features" ? "active" : ""
          }`}
          onClick={() => filterItems("Features")}
        >
          Features
        </button>
        <button
          className={`filter-button ${
            selectedFilter === "Recommend" ? "active" : ""
          }`}
          onClick={() => filterItems("Recommend")}
        >
          Recommend
        </button>
        <button
          className={`filter-button ${
            selectedFilter === "Tour Packages" ? "active" : ""
          }`}
          onClick={() => filterItems("Tour Packages")}
        >
          Tour Packages
        </button>
      </div>
      <div className="card-grid">
        {currentItems.map((product,i) => (
         
            <div className="card" key={product.id}>
               <Link to={`/products/${product.id}`} key={i}>
              <img src={product.image} alt={product.location} />
              
              <div className="card-content">
                <div className="location">{product.location}</div>
                <div className="price">${product.price}</div>
              </div>
              </Link>
              <hr className="line" />
              <p>
                {isCardExpanded(product.id)
                  ? product.description
                  : `${product.description.slice(0, 30)}...`}
                <button onClick={() => toggleCardExpansion(product.id)}>
                  {isCardExpanded(product.id) ? "Read Less" : "Read More"}
                </button>
              </p>
            </div>
         
        ))}
      </div>
      <div className="pagination">{renderPageNumbers()}</div>
    </div>
  );
};

export default ProductList;
