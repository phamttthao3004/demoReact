import React from "react";
import { useSelector } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import CONSTANTS from "./scripts/constants";
import "./App.css";
import News from "./components/news/news";
import Histories from "./components/histories/history";
import NavUI from "./components/layouts/nav.ui";

const App = props => {
  const current_page = useSelector(state => state.current_page);
  const clickMenu = pageId => {
    const { history } = props;
    switch (pageId) {
      case CONSTANTS.CURRENT_PAGE.HOME:
        history.push({ pathname: CONSTANTS.NAV_URL.HOME });
        break;
      case CONSTANTS.CURRENT_PAGE.HISTORY:
        history.push({ pathname: CONSTANTS.NAV_URL.HISTORY });
        break;
      default:
        break;
    }
  };
  return (
    <div className="App container">
      <NavUI currentPage={current_page} clickMenu={clickMenu} />
      <div className="new-list">
        <Route path={CONSTANTS.NAV_URL.HOME} exact component={News} />
        <Route path={CONSTANTS.NAV_URL.HISTORY} component={Histories} />
      </div>
    </div>
  );
};
App.propTypes = {
  history: PropTypes.instanceOf(Object)
};
App.defaultProps = {
  history: {}
};

export default withRouter(App);
