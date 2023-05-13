import PropTypes from "prop-types";

import { stylesContainer, stylesNavLink } from "./styles";

const NavLink = ({ label = "" }) => (
  <h1
    className={`text-primaryText hover:cursor-pointer ${stylesNavLink.sm} ${stylesNavLink.md}`}
  >
    {label}
  </h1>
);

NavLink.propTypes = {
  label: PropTypes.string,
};

const NavBar = () => (
  <div
    className={`bg-black h-12 flex items-center ${stylesContainer.sm} ${stylesContainer.md}`}
  >
    <NavLink label="Mock" />
    <NavLink label="Mock" />
    <NavLink label="Mock" />
    <NavLink label="Mock" />
  </div>
);

export default NavBar;
