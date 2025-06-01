import { Link } from "react-router-dom";

const SpecialCard = (props) => {
  return (
    <div className={`special-card ${props.className || ""}`}>
      <div className="card-image">
        <Link to="/product/1">
          <img src={props.image} alt={props.title} />
        </Link>
      </div>
      <div className="card-content">
        <h5 className="card-category">{props.category}</h5>
        <h4 className="card-title">{props.title}</h4>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
};

export default SpecialCard;
