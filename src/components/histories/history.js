import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import rootAction from "../../actions/action";
import CONSTANTS from "../../scripts/constants";
import HistoryUI from "./history.ui";

const Histories = () => {
  const dispatch = useDispatch();
  const rootSetState = _data => {
    dispatch(rootAction.setState(_data));
  };
  const [data, setData] = useState([]);
  const onChange = objectData => {
    setData(objectData);
  };
  const onSearch = (pTxt = "") => {
    const txt = pTxt.toLowerCase().trim();
    const news = data.map(x => {
      const item = { ...x };
      item.not_in_searching = true;
      if (
        (item.description || "").toLowerCase().includes(txt) ||
        (item.title || "").toLowerCase().includes(txt) ||
        (item.content || "").toLowerCase().includes(txt) ||
        (item.source.name || "").toLowerCase().includes(txt) ||
        (item.author || "").toLowerCase().includes(txt)
      ) {
        item.not_in_searching = false;
      }
      return item;
    });
    onChange(news);
  };
  const getData = () => {
    Promise.all([sessionStorage.getItem("history")])
      .then(result => {
        let data_val = JSON.parse(result) || [];
        setData(data_val);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const Init = () => {
    rootSetState({ current_page: CONSTANTS.CURRENT_PAGE.HISTORY });
    getData();
  };
  useEffect(() => {
    Init();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const props = {
    data,
    onChange,
    onSearch
  };
  return <HistoryUI {...props} />;
};
Histories.propTypes = {
  data: PropTypes.instanceOf(Array)
};
Histories.defaultProps = {
  data: []
};
export default Histories;
