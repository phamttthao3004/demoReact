import React from "react";
import PropTypes from "prop-types";
import ListItem from "../list-items/list-item";

const HistoryUI = ({ data, onChange, onSearch }) => {
  return (
    <ListItem data={data} onChange={onChange} onSearch={onSearch}>
      {data.map(item => {
        return item.show ? (
          <div className="col-md-6 col-12">
            <div className="news-item">
              <a href={item.url} target="_blank">
                {item.urlToImage ? (
                  <img src={item.urlToImage} alt={item.title} />
                ) : null}
              </a>
              <div className="content">
                <h2>
                  <a href={item.url} target="_blank">
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
HistoryUI.propTypes = {
  data: PropTypes.instanceOf(Array),
  onChange: PropTypes.func,
  onSearch: PropTypes.func
};
HistoryUI.defaultProps = {
  data: [],
  onChange: () => {},
  onSearch: () => {}
};
export default HistoryUI;
