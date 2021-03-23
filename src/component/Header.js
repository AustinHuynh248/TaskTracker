import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{props.title}</h1>
      {/* this is where react are valuable we can dynamic change button without any component needing reload */}
      {location.pathname === "/" &&
        (props.showAdd ? (
          <Button color="red" text="Close" onClick={props.onAdd} />
        ) : (
          <Button color="green" text="Add" onClick={props.onAdd} />
        ))}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// css in js
// const headingStyle = {
//   color: "white",
//   backgroundColor: "black",
// };

export default Header;
