import { useEffect, useState } from "react";
import {
  BsEnvelope,
  BsEye,
  BsFire,
  BsHeart,
  BsLayers,
  BsShare,
  BsShield,
  BsStar,
} from "react-icons/bs";
import { LuShare2, LuShip } from "react-icons/lu";

import { Link } from "react-router-dom";

import {
  Circle,
  Color,
  IconLink,
  PaymentAvailableInProduct,
  QuantityButton,
  Rates,
} from "@/components/shared";

const ProductDetails = () => {
  const [size, setSize] = useState("S");

  const openInFullscreen = (evt: MouseEvent) => {
    const element = evt.target as HTMLImageElement;

    try {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      }
      /**
       * else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } [https://developer.apple.com/documentation/webkit/domelement/webkitrequestfullscreen(_:)]
       */
    } catch (error) {
      console.error("Error while opening in fullscreen", error);
    }
  };

  useEffect(() => {
    // All Images
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.addEventListener("click", openInFullscreen);
    });
  }, []);

  return (
    <div className="product">
      <div className="product-image-preview">
        <div className="hero-image">
          <img src="/images/product1.webp" alt="product" />
        </div>

        <div className="mini-images">
          <img src="/images/product1.webp" alt="product" />
          <img src="/images/product1.webp" alt="product" />
          <img src="/images/product1.webp" alt="product" />
          <img src="/images/product1.webp" alt="product" />
        </div>
      </div>
      {/*  */}
      <div className="product-info">
        <header className="product-info-header">
          {/* Product Title */}
          <h3 className="product-name">
            Kids Headphone Bulk 10 Pack multi Colored For Students
          </h3>

          {/* Product Rate and Sold quantity */}
          <div className="product-below-name">
            <div className="product-rating">
              <Rates stars={5} rate={3} isFixed={false} />
              <span className="product-rating-count"> (2 reviews)</span>
            </div>
            <div className="product-sold-out">
              <BsFire /> 13 sold in last 24
            </div>
          </div>
        </header>

        {/* Split Line */}
        <hr className="hr-line" />

        {/* Product Price */}
        <p className="product-price">$99.99</p>

        {/* Product Features List */}
        <div className="product-features">
          <ul>
            <li>Bass and Stereo Sound.</li>
            <li>Display with 3088 x 1440 pixels resolution.</li>
            <li>Memory, Storage & SIM: 12GB RAM, 256GB.</li>
          </ul>
        </div>

        {/* How many people watch now the product */}
        <p className="watch-count">
          <BsEye /> 15 people are viewing this right now
        </p>

        {/* Sold Out Progress, How many left */}
        <div className="product-stock-progress">
          <span className="progress-text">
            Hurry up! <span className="text-info fw-bold ">70%</span> Stock Left
          </span>

          <div
            className="w-100 bg-dark-subtle rounded-1  "
            style={{ height: "10px" }}
          >
            <div
              className="bg-danger h-100"
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        {/* Product Buttons Actions */}
        <div className="product-action-buttons">
          <div className="cart-button">
            <QuantityButton />
            <button className="btn btn-dark text-white">Add to Cart</button>
          </div>

          <button className="buy-button w-100 btn btn-info py-3 px-2">
            Buy with Shop <span className="p-1 bg-white text-info">Pay</span>
          </button>
        </div>

        {/* Product Links Actions */}
        <div className="product-links-actions">
          <div className="left-links">
            <IconLink Icon={BsHeart} link="wishlist" text="Wishlist" />
            <IconLink Icon={BsLayers} link="compare" text="Compare" />
          </div>
          <div className="right-links">
            <IconLink
              text="share"
              Icon={BsShare}
              link="share"
              // text="Share"
              className="text-primary text-decoration-underline"
            />
          </div>
        </div>

        {/* Write a Review */}
        <IconLink
          Icon={BsStar}
          link="#form-review"
          text="Write a review"
          className="write-review-link text-primary text-decoration-underline"
        />

        <hr className="hr-line" />

        {/* Shipping Information */}
        <div className="product-shipping-info">
          <header>
            <h4>
              <BsShield /> Shipping and Returns
            </h4>

            <IconLink
              Icon={BsEnvelope}
              link="contact"
              text="Contact to us"
              className="text-primary"
            />
          </header>

          <main>
            <div className="shipping-info">
              <LuShip /> Estimated Delivery:{" "}
              <span className="shipping-date fw-bold ">Apr 03 - Apr 07</span>
            </div>
            <div className="shipping-info">
              <LuShare2 /> Return within{" "}
              <span className="shipping-return fw-bold ">30 days</span> of
              purchase. Taxes are non-refundable.
            </div>
          </main>
        </div>

        <hr className="hr-line" />

        <main className="product-info-main">
          <div className="info">
            <dt>Availablity</dt>
            <dd>In stock</dd>
          </div>

          <div className="info">
            <dt>Shipping</dt>
            <dd>Free Shipping</dd>
          </div>

          <div className="info">
            <dt>Weight</dt>
            <dd>0.5 kg</dd>
          </div>

          <div className="info">
            <dt>Tags</dt>
            <dd className="d-flex flex-wrap gap-1">
              <Link to="/tags" className="badge bg-primary text-white">
                Headphone
              </Link>
              <Link to="/tags" className="badge bg-primary text-white">
                Kids
              </Link>
              <Link to="/tags" className="badge bg-primary text-white">
                Bulk
              </Link>
              <Link to="/tags" className="badge bg-primary text-white">
                Students
              </Link>
            </dd>
          </div>

          <div className="info">
            <dt>Sizes:</dt>
            <dd>
              {["S", "M", "L", "XL"].map((s) => (
                <Circle
                  key={s}
                  className={`size-btn ${s === size ? "active" : ""}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </Circle>
              ))}
            </dd>
          </div>

          <div className="info">
            <dt>Color</dt>
            <dd>
              <div className="colors">
                <Color color="red" />
                <Color color="blue" />
                <Color color="green" />
                <Color color="yellow" />
              </div>
            </dd>
          </div>
        </main>

        <footer className="product-payment">
          <PaymentAvailableInProduct />
        </footer>
      </div>
    </div>
  );
};

export default ProductDetails;
