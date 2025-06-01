import { Link } from "react-router-dom";

const Column = ({ title, links }) => {
  return (
    <>
      <h3 className="text-white font-bold text-xl mb-5">{title}</h3>
      <ul className="list-none">
        {links.map((link) => (
          <li>
            <Link
              to={link.toLowerCase().split(" ").join("-")}
              key={`${Math.random() * 100 + link}`}
              className="mt-1 text-white d-block"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Column;
