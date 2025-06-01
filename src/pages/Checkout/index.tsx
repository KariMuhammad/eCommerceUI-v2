import { Link } from "react-router-dom";
import { LuArrowBigLeft } from "react-icons/lu";

import { Breadcrump } from "@/components";
import Select from "@/components/Select";

const Checkout = () => {
  return (
    <div className="pg-checkout">
      <div className="container-xl">
        <div className="pg-content">
          <div className="left-block">
            <header>
              <h1>Stori</h1>

              <div className="breadcrump">
                <Breadcrump
                  links={[
                    { link: "/", name: "Home" },
                    { link: "#information", name: "information", active: true },
                    { link: "#payment", name: "payment" },
                    { link: "#checkout", name: "Checkout" },
                  ]}
                />
              </div>
            </header>

            <div className="contact-information py-3">
              <h2 className="section-title h2 fw-medium">
                Contact Information
              </h2>

              <p className="contact-email h5">
                Karim Muhammad (keenade@gmail.com)
              </p>

              <span className="d-block h5">Log out</span>

              <div className="input-logout">
                <input
                  type="checkbox"
                  name="subscribe-input"
                  id="subscribe-input"
                />

                <label htmlFor="subscribe-input">
                  Email me with news and offers
                </label>
              </div>
            </div>

            <div className="shipping-information py-3">
              <h2 className="section-title">Shipping Information</h2>
              <Select title="Saved Address" className="bg-white mb-3" />
              <Select title="Country/Region" className="bg-white mb-3" />

              <div className="inputs-group">
                <div className="row-2">
                  <input
                    className="input"
                    type={"text"}
                    placeholder="First name (optional)"
                    required={false}
                  />

                  <input
                    className="input"
                    type={"text"}
                    placeholder="Last name (optional)"
                    required={false}
                  />
                </div>

                <input
                  className="input"
                  type={"text"}
                  placeholder="Address"
                  required={true}
                />

                <input
                  className="input"
                  type={"text"}
                  placeholder="Apartment, suite, etc."
                />

                <div className="row-3">
                  <input
                    className="input"
                    type={"text"}
                    placeholder="City"
                    required={true}
                  />

                  <Select title="State" className="input mb-3 bg-white" />

                  <input
                    className="input"
                    type={"text"}
                    placeholder="Zip"
                    required={true}
                  />
                </div>
              </div>
            </div>

            <div className="buttons-actions d-flex justify-content-between">
              <Link to="/" className="btn btn-outline-dark">
                <LuArrowBigLeft fontSize={"1.3rem"} /> Return to Cart
              </Link>

              <button className="btn btn-primary">Continue to shipping</button>
            </div>

            <footer className="my-5 border-bottom border-1">
              <p className="text-muted">
                By continuing, you agree to Stori's Conditions of Use and
                Privacy Notice.
              </p>

              <p className="text-muted">
                All rights reserved. Stori, the Stori logo, and other Stori
                marks are trademarks of Stori Inc. or its affiliates.
              </p>
            </footer>
          </div>

          <div className="right-block">
            <header>
              <img src="/images/product1.webp" alt="product-1" />
              <div className="quantity badge badge-dark">1</div>
              <div className="info">
                <div className="left">
                  <h3>Apple iPhone 11 Pro 256GB Space Gray – Unlocked</h3>
                  <p>XL / Red</p>
                </div>
                <div className="right fw-bold">$100.00</div>
              </div>
            </header>
            <main>
              <dt>Subtotal</dt>
              <dd>$100.00</dd>

              <dt>Shipping</dt>
              <dd>Free</dd>
            </main>
            <footer>
              <dt>Total</dt>
              <dd>
                <span className="d-none d-xl-inline-block">USD</span> $100.00
              </dd>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
