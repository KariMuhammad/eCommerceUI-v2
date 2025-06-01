import {
  FaPhone,
  FaEnvelope,
  FaCcApplePay,
  FaGooglePlay,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// CSS
import "./Footer.css";
import Column from "@/components/Footer/Column";
import SubscribeInput from "@/components/SubscribeInput";
const Footer = () => {
  return (
    <div className="bg-slate-900 text-white">
      <div className="container mx-auto">
        <div className="middle py-3">
          <div className="flex flex-wrap m-0 gap-y-7">
            <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-3 text-white">
              <h3 className="text-2xl font-bold">Download App</h3>
              <p className="text-gray-400 my-3">
                Download our app and get extra 15% Discount on your first order.
              </p>

              <div className="flex flex-wrap gap-1">
                {/* Apple Store */}
                <div className="px-3 py-1 rounded-sm flex gap-2 items-center text-white border">
                  <FaCcApplePay className="w-5 h-5" />
                  <div>
                    <Link to="" className="text-xs uppercase font-semibold">
                      Download
                    </Link>
                  </div>
                </div>

                {/* Google Play */}
                <div className="px-3 py-1 rounded-sm flex gap-2 items-center text-white border">
                  <FaGooglePlay className="w-5 h-5" />
                  <div>
                    <Link to="" className="text-xs uppercase font-semibold">
                      Download
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-3">
              <h3 className="text-xl text-white font-bold mb-3">About Us</h3>
              <p className="text-white">
                Demo Store
                <br />
                No. 123, Main Road, New York, 1111 <br />
                United States
              </p>

              <p className="text-white">
                <FaPhone className="me-1" />{" "}
                <a href="tel:+123 456 7890">+123 456 7890</a>
              </p>

              <p className="text-white">
                <FaEnvelope className="me-1" />
                <a href="mailto:kimoomar007@gmail.com">kimoomar007@gmail.com</a>
              </p>
            </div>

            <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-3">
              <Column
                title="Account"
                links={["My Account", "About us", "Faq", "Contact", "Specials"]}
              />
            </div>

            <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-3">
              <Column
                title="Information"
                links={[
                  "Refund Policy",
                  "Shipping Policy",
                  "Terms of Services",
                  "Privacy Policy",
                  "Blogs",
                ]}
              />
            </div>

            <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-3">
              <Column
                title="Quick Links"
                links={["Home", "Laptops", "Cameras", "Tablets", "TVs"]}
              />
            </div>

            <div className="basis-full grow sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-3">
              <div className="p-3 w-full">
                <h3 className="text-xl text-white font-bold capitalize">
                  Sign up For Newsletter
                </h3>
                <p className="text-gray-500 my-3">
                  Join 60.000+ subscribers and get a new discount coupon on
                  every Saturday.
                </p>
                <SubscribeInput className="!w-2/3 md:w-full" />
                <p className="text-gray-500 my-3">
                  By providing your email address, you agree to our Privacy
                  Policy and Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lower">
          <p className="text-center text-white mb-0">
            &copy; {new Date().getFullYear()} All rights reserved by @Karim
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
