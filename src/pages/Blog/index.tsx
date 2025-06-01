import { Link } from "react-router-dom";
import { BsArrowLeft, BsFacebook, BsTwitch, BsTwitter } from "react-icons/bs";

import { Breadcrump } from "@/components";

const Blog = () => {
  return (
    <div className="pg-blog">
      <div className="breadcrump">
        <Breadcrump
          links={[
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
          ]}
        />
      </div>

      <div className="pg-content">
        <div className="container-xxl">
          <div className="blog-content">
            <div className="d-none d-lg-block left-side-content">
              <div className="card">
                <h3>Shop By Categories</h3>

                <ul className="p-0">
                  <li>Home</li>
                  <li>Our Store</li>
                  <li>Blogs</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            {/* ./left-side-content */}

            <div className="right-side-content">
              <div className="blog">
                <h2 className="blog-title">How to start your startup</h2>

                <div className="blog-cover">
                  <img src="/images/blog1.webp" alt="Article 1" />
                </div>

                <div className="blog-content">
                  <p className="text-muted my-2">
                    Laudantium eius, eveniet perferendis voluptate dolorum
                    libero, voluptatum, facilis aperiam aliquid suscipit enim
                    tempore pariatur rem mollitia necessitatibus architecto
                    facere beatae quisquam? Sequi nulla ipsam dolorem magnam
                    voluptates! Sit quam quis aperiam provident, saepe et!
                    Consequatur perferendis recusandae dolores consequuntur
                    magni dolore neque, esse voluptas cum in, atque beatae natus
                    molestiae aspernatur? Cupiditate omnis iusto obcaecati, quam
                    iste eligendi at quaerat quia numquam, consequuntur,
                    perspiciatis aliquam voluptas eius quos adipisci ut in
                    pariatur harum tempore voluptates. Labore harum ad minima
                    quidem praesentium. Cum quisquam voluptatum, itaque id vero
                    sed. Delectus et corporis earum nulla corrupti expedita
                    ullam porro voluptatem! Sed delectus iste minus ducimus,
                    perspiciatis eos. Eius in ipsa dignissimos iusto sunt. Quos
                    ex totam repellendus velit. Quae, autem. Alias atque
                    veritatis est. Vitae nemo nulla iure suscipit, praesentium
                    doloribus. Aliquam quisquam quaerat rerum fugiat debitis
                    eaque reiciendis repellendus quam impedit nesciunt.
                  </p>
                </div>

                <div className="blog-info d-flex gap-5 text-muted">
                  <div className="blog-date">
                    {new Date().toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>

                  <div className="blog-author">
                    <span>By:</span> John Doe
                  </div>
                </div>

                <div className="blog-action-links d-flex justify-content-between align-items-center">
                  <div className="left-links">
                    <Link to="/blogs">
                      <BsArrowLeft />
                      Back to blogs
                    </Link>
                  </div>
                  <div className="right-links">
                    {/* Social links */}
                    <BsFacebook />
                    <BsTwitter />
                    <BsTwitch />
                  </div>
                </div>

                <div className="blog-comment">
                  <div className="comment-form">
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name"
                          className="form-control"
                        />
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group comment-input">
                        <textarea
                          name="comment"
                          id="comment"
                          placeholder="Comment"
                          className="form-control"
                        ></textarea>
                      </div>

                      <div className="form-group">
                        <button className="btn btn-primary">
                          Post Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* ./right-side-content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
