import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs"

import "./Product.css";

export default function Products() {
  return (
    <>
      <section className="card-container">
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <div className="card-reviews">
              <AiFillStar className="ratings-start"/> <AiFillStar className="ratings-start"/> <AiFillStar className="ratings-start"/> <AiFillStar className="ratings-start"/>
              <span className="total-reviews">4</span>
            </div>
            <div className="card-price">
              <div className="price">
                <del>$300</del> 200
              </div>
              <div className="bag">
              <BsFillBagHeartFill  className="bag-icon"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
