import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import DetailedProduct from "./DetailedProduct";

const SingleProduct = ({ image, title, id, price }) => {
  return (
    <div>
      <img src={image} alt=" " />
      <h3>{title}</h3>
      {/* <p>Price: {price}</p> */}
      <Link to={"/products/" + id}>See More</Link>
      {/* <Link to={`${id}`}>
        <button>More Info</button>
      </Link> */}
    </div>
  );
};
export default SingleProduct;
