import React, { useState, useEffect } from "react";
// import data from "../../db.json";
import "./ProductList.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7000/vacation?page=${currentPage}`, {
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
        setCurrentItems(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage,currentItems]);

  const [totalPages, setTotalPages] = useState(Math.ceil(34 / 6));
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

  const [filteredItems, setFilteredItems] = useState(currentItems);

  const filterItems = (filterType) => {
    let filteredItems = [...currentItems];

    if (filterType === "All") {
      setSelectedFilter(filterType);
      setCurrentPage(1);
      setCurrentItems(currentItems);
    } else if (filterType === "Trending") {
      filteredItems = filteredItems.filter((item) => item._id % 3 === 0);
      setSelectedFilter(filterType);
      setCurrentPage(3);
      setCurrentItems(filteredItems.slice(0, itemsPerPage));
    } else if (filterType === "Popular") {
      filteredItems = filteredItems.filter((item) => item._id % 4 === 0);
      setSelectedFilter(filterType);
      setCurrentPage(2);
      setCurrentItems(filteredItems.slice(0, itemsPerPage));
    } else if (filterType === "Features") {
      filteredItems = filteredItems.filter((item) => item._id % 6 === 0);
      setSelectedFilter(filterType);
      setCurrentPage(5);
      setCurrentItems(filteredItems.slice(0, itemsPerPage));
    } else if (filterType === "Recommend") {
      filteredItems = filteredItems.filter((item) => item._id % 8 === 0);
      setSelectedFilter(filterType);
      setCurrentPage(6);
      setCurrentItems(filteredItems.slice(0, itemsPerPage));
    } else if (filterType === "Tour Packages") {
      filteredItems = filteredItems.filter((item) => item._id % 5 === 0);
      setSelectedFilter(filterType);
      setCurrentPage(4);
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
      <div
        className="pagination"
        style={{ marginTop: "-15px", padding: "0 0 0 28px" }}
      >
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
      <div
        className="filter-buttons"
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "left",
          padding: "0 40px 0 0px",
          gap: "5px",
          marginBottom: "20px",
        }}
      >
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
        {currentItems.map((product, i) => (
          <div className="card" key={product._id}>
            <Link to={`/products/${product._id}`} key={i}>
              <img src={product.image} alt={product.location} />

              <div className="card-content">
                <div className="location">{product.location}</div>
                <div className="price">${product.price}</div>
              </div>
            </Link>
            <hr className="line" />
            <p>
              {isCardExpanded(product._id)
                ? product.description
                : `${product.description.slice(0, 30)}...`}
              <button onClick={() => toggleCardExpansion(product._id)}>
                {isCardExpanded(product._id) ? "Read Less" : "Read More"}
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
