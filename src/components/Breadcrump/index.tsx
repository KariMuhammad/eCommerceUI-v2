import { useState } from "react";
import { Link } from "react-router-dom";

type BreadcrumpProps = {
  name: string;
  link: string;
  active?: boolean;
};

const Breadcrump = ({ links }: { links: BreadcrumpProps[] }) => {
  const [active, setActive] = useState<number>(() => {
    return links.findIndex((elm) => elm.active);
  });

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ul className="flex items-center space-x-2">
          {links.map((link, index) => (
            <>
              <li
                className={`${
                  active === index ? "bg-blue-500 text-white px-2 py-1" : ""
                }`}
                onClick={() => setActive(index)}
                key={index}
              >
                <Link to={link.link}>{link.name}</Link>
              </li>

              {index + 1 < links.length && <li className="text-gray-500">/</li>}
            </>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrump;
