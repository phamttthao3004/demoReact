import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import rootAction from "../../actions/action";
import CONSTANTS from "../../scripts/constants";
import NewsUI from "./news.ui";

const News = () => {
  const dispatch = useDispatch();
  const rootSetState = _data => {
    dispatch(rootAction.setState(_data));
  };
  const [data, setData] = useState([]);

  const arr = () => {
    var a = [];
    for (let obj of CONSTANTS.DOMAIN_LIST) {
      const api = `${CONSTANTS.API_DOMAIN}?domains=${obj}&apiKey=${
        CONSTANTS.API_KEY
      }&pageSize=${CONSTANTS.PAGE_SIZE}`;
      a.push(fetch(api).then(value => value.json()));
    }
    return a;
  };
  const GetData = () => {
    Promise.all(arr())
      .then(result => {
        var data_val = [];
        for (let obj of result) {
          data_val = data_val.concat(obj.articles);
        }
        setData(data_val);
      })
      .catch(err => {
        console.log(err);
      });
  };
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
  const onClick = obj => {
    var list = JSON.parse(sessionStorage.getItem("history")) || [];
    const { length } = list.filter(e => e.index === obj.index);
    if (length === 0) list.push(obj);
    sessionStorage.setItem("history", JSON.stringify(list));
    window.open(obj.url, "_blank");
  };
  const Init = () => {
    rootSetState({ current_page: CONSTANTS.CURRENT_PAGE.HOME });
    GetData();
  };
  useEffect(() => {
    Init();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const props = {
    data,
    onChange,
    onSearch,
    onClick
  };
  return <NewsUI {...props} />;
};
News.propTypes = {
  data: PropTypes.instanceOf(Array)
};
News.defaultProps = {
  data: []
};
export default News;
