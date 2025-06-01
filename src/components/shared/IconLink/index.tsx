import { Link } from "react-router-dom";

const IconLink = ({ Icon, link, text, ...props }) => {
  return (
    <Link to={`${link}`} {...props}>
      <Icon /> {text}
    </Link>
  );
};

export default IconLink;
