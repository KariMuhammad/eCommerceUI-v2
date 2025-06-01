import { useState } from "react";
import { BsArrowDown } from "react-icons/bs";

const PrivacyBox = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`privacy-box ${show ? "show" : ""}`}>
      <h3 className="privacy-title" onClick={() => setShow((s) => !s)}>
        <span className="icon">
          <BsArrowDown />
        </span>

        {props.title}
      </h3>

      <p className="privacy-description text-muted">{props.description}</p>
    </div>
  );
};

export default PrivacyBox;
