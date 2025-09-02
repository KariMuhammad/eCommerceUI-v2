// Constants
import { blogs } from "@/constants";

// Components
import Breadcrump from "@/components/shared/Breadcrump";
import { Blog } from "@/components";

export default function Blogs(props) {
  return (
    <>
      <div className="blogs">
        <div className="breadcrump">
          <Breadcrump
            links={[
              { link: "/", name: "Home" },
              { link: "/blogs", name: "Blogs" },
            ]}
          />
        </div>

        <div className="container-xxl">
          <div className="blogs-content">
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
              {blogs.map((blog) => (
                <Blog blog={blog} />
              ))}
            </div>
            {/* ./right-side-content */}
          </div>
        </div>
      </div>
    </>
  );
}
