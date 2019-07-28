import React from "react";
import PropTypes from "prop-types";

const ListItemUI = ({
  from,
  to,
  total,
  disabled_prev,
  disabled_next,
  children,
  data,
  keyUpSearch,
  clickPrevious,
  clickNext
}) => {
  return (
    <div className="list-item-container">
      <div className="list-item-header">
        <div className="row">
          <div className="col-sm-6 col-xs-12 header-left" />
          <div className="col-sm-6 col-xs-12 header-right">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">
                  Search
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                onKeyUp={keyUpSearch}
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">{children}</div>
      <div className="list-item-footer">
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <nav aria-label="Page navigation example">
              <ul className="pagination text-right">
                <li className="page-item">
                  <a
                    onClick={clickPrevious}
                    className={`page-link${disabled_prev ? " disabled" : ""}`}
                    href="#"
                  >
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a
                    onClick={clickNext}
                    className={`page-link${disabled_next ? " disabled" : ""}`}
                    href="#"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-6 col-xs-12 text-right">
            <span className="text">
              <b>
                Showing {from + 1} to {to} of {total} items
              </b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

ListItemUI.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
  total: PropTypes.number,
  disabled_prev: PropTypes.bool,
  disabled_next: PropTypes.bool,
  children: PropTypes.instanceOf(Array),
  data: PropTypes.instanceOf(Array),
  keyUpSearch: PropTypes.func,
  clickPrevious: PropTypes.func,
  clickNext: PropTypes.func
};
ListItemUI.defaultProps = {
  from: -1,
  to: 0,
  total: 0,
  disabled_prev: true,
  disabled_next: true,
  children: [],
  data: [],
  keyUpSearch: () => {},
  clickPrevious: () => {},
  clickNext: () => {}
};

export default ListItemUI;
