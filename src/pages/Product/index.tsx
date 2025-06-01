import { useState } from "react";

import { Breadcrump } from "@/components";
import ProductDetails from "@/components/ProductDetails";
import { Grid2Products, HorizontalProduct, Rates } from "@/components/shared";
import { products } from "@/constants";

const Product = () => {
  const [openReview, setOpenReview] = useState(false);

  return (
    <>
      <div className="pg-product">
        <div className="breadcrump">
          <Breadcrump
            links={[
              { link: "/", name: "Home" },
              { link: "/products", name: "Products" },
              { name: "Product", link: "/product", active: true },
            ]}
          />
        </div>

        <div className="pg-content">
          <div className="container-xxl">
            <section className="product-details">
              <ProductDetails />
            </section>
            <section className="product-description">
              <h3 className="section-title">Description</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum asperiores error cumque nihil perspiciatis a minus culpa
                atque veritatis ducimus, cupiditate quo neque cum molestias
                explicabo tempore minima fugiat praesentium. Repellendus
                asperiores illum obcaecati doloribus earum ab eligendi
                repudiandae soluta perspiciatis reiciendis ex necessitatibus
                voluptatum quas, quae et qui nulla pariatur sunt nihil quibusdam
                maiores iure! Voluptatibus quas dolore minima. Ad nulla tenetur,
                saepe in est aliquid nemo esse quasi mollitia molestiae maxime
                odio aperiam obcaecati deleniti commodi excepturi consequuntur
                dolore natus cum! Dolorem rem porro ex vel numquam nemo.
              </p>
            </section>

            <section
              id="form-review"
              className={`form-review ${openReview ? "show" : ""}`}
            >
              <h3 className="">Write a review</h3>
              {/*  */}
              <div className="form-rate">
                <h5>Rating</h5>
                <Rates stars={5} rate={3} isFixed={true} />
              </div>
              {/*  */}
              <div>
                <h5>Review title</h5>
                <input type="text" placeholder="Give your review title" />
              </div>
              {/*  */}
              <div>
                <h5>Review</h5>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  placeholder="Write your review here"
                ></textarea>
              </div>
              {/*  */}
              <div>
                <h5>Picture/Video (Optional)</h5>
                <input type="file" />
              </div>
              {/*  */}
              <div>
                <h5>
                  Name (Displayed Publicly like{" "}
                  <span className="text-primary">John Doe</span> ) (Optional)
                </h5>
                <input type="text" placeholder="Enter your name (public)" />
              </div>
              {/*  */}
              <div>
                <h5>Email</h5>
                <input type="email" placeholder="Enter your email" />
              </div>
              {/*  */}
              <p>
                How we use your data: We’ll only contact you about the review
                you left, and only if necessary. By submitting your review, you
                agree to Judge.me’s <span>terms</span>, <span>privacy</span> and
                <span> content</span> policies.
              </p>

              <div className="buttons">
                <button className="btn btn-primary text-white">Submit</button>
                <button
                  className="btn btn-outline btn-outline-primary"
                  onClick={() => setOpenReview(false)}
                >
                  Cancel
                </button>
              </div>
            </section>

            <section className="product-reviews">
              <header className="reviews-header">
                <h3 className="section-title">Customer Reviews</h3>
                <div className="reviews-info">
                  <div className="reviews-stars">
                    <Rates stars={5} rate={3} isFixed={true} />
                    <span className="reviews-count">based on 3 reviews</span>
                  </div>

                  <div className="reviews-action">
                    <button
                      className="write-review btn btn-primary"
                      onClick={() => setOpenReview((o) => !o)}
                    >
                      {openReview ? "Close Review" : "Write a review"}
                    </button>
                  </div>
                </div>
              </header>
              <main className="reviews-reply">
                <div className="review-box">
                  <header>
                    <div className="review-star">
                      <Rates stars={5} rate={3} isFixed={true} />
                    </div>

                    <div className="review-info">
                      <h5 className="review-title">
                        Quality of Product is AMAZING!!!
                      </h5>
                      <div className="">
                        <span className="review-name">John Doe</span> on{" "}
                        <span className="review-date">12/12/2021</span>
                      </div>
                    </div>
                  </header>
                  <main className="review-content">
                    <div className="review-comment">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae, voluptas! Lorem ipsum dolor
                      </p>
                    </div>

                    <div className="review-reply">
                      <button className="btn btn-primary">Reply</button>

                      <form></form>
                    </div>
                  </main>
                </div>
                {/*  */}
                <div className="review-box">
                  <header>
                    <div className="review-star">
                      <Rates stars={5} rate={3} isFixed={true} />
                    </div>

                    <div className="review-info">
                      <h5 className="review-title">
                        Quality of Product is AMAZING!!!
                      </h5>
                      <div className="">
                        <span className="review-name">John Doe</span> on{" "}
                        <span className="review-date">12/12/2021</span>
                      </div>
                    </div>
                  </header>
                  <main className="review-content">
                    <div className="review-comment">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae, voluptas! Lorem ipsum dolor
                      </p>
                    </div>

                    <div className="review-reply">
                      <button className="btn btn-primary">Reply</button>

                      <form></form>
                    </div>
                  </main>
                </div>
                {/*  */}
                <div className="review-box">
                  <header>
                    <div className="review-star">
                      <Rates stars={5} rate={3} isFixed={true} />
                    </div>

                    <div className="review-info">
                      <h5 className="review-title">
                        Quality of Product is AMAZING!!!
                      </h5>
                      <div className="">
                        <span className="review-name">John Doe</span> on{" "}
                        <span className="review-date">12/12/2021</span>
                      </div>
                    </div>
                  </header>
                  <main className="review-content">
                    <div className="review-comment">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae, voluptas! Lorem ipsum dolor
                      </p>
                    </div>

                    <div className="review-reply">
                      <button className="btn btn-primary">Reply</button>

                      <form></form>
                    </div>
                  </main>
                </div>
                {/*  */}
              </main>
            </section>

            <section className="special-collection">
              <h3 className="section-title">You may like this</h3>
              <Grid2Products products={products} Card={HorizontalProduct} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
