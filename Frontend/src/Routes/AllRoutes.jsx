import { Route, Routes } from "react-router-dom";
import { SignUp } from "../Components/SignUp/SignUp";
import Login from "../Components/Login/Login";
import MyBooking from "../Components/MyBooking/MyBooking";
import HomePage from "../Components/Home/HomePage";
import BookingProcess from "../Components/Payment/BookingProcess";
import ProductDetailsPage from "../Components/ProductDetailsPage/ProductDetailsPage";
import ProductList from "../Components/Product/ProductList";
import SearchResultsPage from "../Components/SearchBar/SearchResultsPage";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/booking" element={<MyBooking />} />
      <Route path="/payment" element={<BookingProcess />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path = "/search-results" element = {<SearchResultsPage />} />
    </Routes>
  );
};

export default AllRoutes;
