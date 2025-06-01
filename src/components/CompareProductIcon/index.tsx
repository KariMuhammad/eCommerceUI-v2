import { Link } from "react-router-dom";

export default function CompareProductIcon() {
  return (
    <div className="icon">
      <Link
        to={"/compare-products"}
        className="d-flex align-items-center gap-2"
      >
        <img src="images/compare.svg" alt="icon-compare" />
        <p className="mb-0">
          Compare <br /> Products
        </p>
      </Link>
    </div>
  );
}
