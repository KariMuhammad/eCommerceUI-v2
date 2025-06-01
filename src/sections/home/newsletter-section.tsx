import { Link } from "react-router-dom";
import { blogs } from "@/constants";

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <h3>Newsletter Blogs</h3>

      <div className="blogs row mx-0">
        {blogs.map((blog, index) => (
          <div
            className="blog flex-grow-1 col-12 col-sm-6 col-md-4 col-lg-3"
            key={index}
          >
            <div className="blog-image">
              <img src={blog.image} alt={`blog-${index}`} />
            </div>
            <div className="blog-content">
              <p className="small text-muted ">{blog.date}</p>
              <Link to="/blog/1">
                <h3 className="">{blog.title}</h3>
              </Link>
              <p className="text-body text-muted ">{blog.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsletterSection;
