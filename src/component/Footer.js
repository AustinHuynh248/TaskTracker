import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link className="btn" style={{ marginTop: "1rem" }} to="/about">
        About
      </Link>
    </footer>
  );
};

export default Footer;
