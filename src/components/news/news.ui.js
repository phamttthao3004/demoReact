import React from "react";
import PropTypes from "prop-types";
import ListItem from "../list-items/list-item";

const NewsUI = ({ data, onChange, onSearch, onClick }) => {
  return (
    <ListItem data={data} onChange={onChange} onSearch={onSearch}>
      {data.map(item => {
        return item.show ? (
          <div className="col-md-6 col-12" key={item.index}>
            <div className="news-item">
              <a href="#" onClick={onClick.bind(this, item)} target="_blank">
                {item.urlToImage ? (
                  <img src={item.urlToImage} alt={item.title} />
                ) : null}
              </a>
              <div className="content">
                <h2>
                  <a
                    href="#"
                    onClick={onClick.bind(this, item)}
                    target="_blank"
                  >
                    {item.title}
                  </a>
                </h2>
                <span>{item.source.name || ""}</span>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ) : null;
      })}
    </ListItem>
  );
};
NewsUI.propTypes = {
  data: PropTypes.instanceOf(Array),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onSearch: PropTypes.func
};
NewsUI.defaultProps = {
  data: [],
  onChange: () => {},
  onClick: () => {},
  onSearch: () => {}
};
export default NewsUI;
