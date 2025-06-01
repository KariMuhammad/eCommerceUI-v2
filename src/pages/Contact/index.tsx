import { BsEnvelope, BsHouse, BsInfo, BsTelephone } from "react-icons/bs";

import Breadcrump from "@/components/Breadcrump";
const Contact = () => {
  return (
    <div className="contact">
      <div className="breadcrump">
        <Breadcrump
          links={[
            { link: "/", name: "Home" },
            { link: "/contact", name: "Contact" },
          ]}
        />
      </div>

      <div className="contact-content">
        <div className="container-xxl">
          <div className="block block-up map">
            <iframe
              className="w-100"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907337.8136757141!2d31.6143348!3d27.3354528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14450bef2dc15957%3A0x5fc0931b3e3117bb!2z2K_Yp9ixINin2YTYs9mK2YjYt9mJINmE2YTZg9iq2KfYqA!5e0!3m2!1sen!2seg!4v1711393963501!5m2!1sen!2seg"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* ./block-up */}
          <div className="block block-down bg-white">
            <div className="form-section">
              <div className="left-form">
                <h3>Contact Us</h3>
                <form>
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <input type="text" placeholder="Comment" />

                  <input type="submit" value="Send" />
                </form>
              </div>
              <div className="right-form">
                <h3>Get in touch</h3>

                <ul>
                  <li>
                    <span className="icon">
                      <BsHouse />
                    </span>
                    <span className="text">
                      33 New York, St. Ste 750 San Fransisco
                    </span>
                  </li>
                  <li>
                    <span className="icon">
                      <BsTelephone />
                    </span>
                    <span className="text">0102938120398</span>
                  </li>
                  <li>
                    <span className="icon">
                      <BsEnvelope />
                    </span>
                    <span className="text">example23@gmail.com</span>
                  </li>
                  <li>
                    <span className="icon">
                      <BsInfo />
                    </span>
                    <span className="text">Monday - Friday 10 AM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ./block-down */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
