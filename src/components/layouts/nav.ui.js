import React from "react";
import PropTypes from "prop-types";
import CONSTANTS from "../../scripts/constants";

const NavUI = ({ clickMenu, currentPage }) => {
  return (
    <ul className="nav nav-tabs">
      <li role="presentation" className="nav-item pointer">
        <span
          className={`nav-link${
            currentPage === CONSTANTS.CURRENT_PAGE.HOME ? " active" : ""
          }`}
          onClick={clickMenu.bind(this, CONSTANTS.CURRENT_PAGE.HOME)}
        >
          News
        </span>
      </li>
      <li role="presentation" className="nav-item pointer">
        <span
          className={`nav-link${
            currentPage === CONSTANTS.CURRENT_PAGE.HISTORY ? " active" : ""
          }`}
          onClick={clickMenu.bind(this, CONSTANTS.CURRENT_PAGE.HISTORY)}
        >
          History
        </span>
      </li>
    </ul>
  );
};
NavUI.propTypes = {
  clickMenu: PropTypes.func,
  currentPage: PropTypes.number
};
NavUI.defaultProps = {
  clickMenu: () => {},
  currentPage: CONSTANTS.CURRENT_PAGE.NONE
};
export default NavUI;
