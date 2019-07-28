import React from "react";
import PropTypes from "prop-types";
import ListItemUI from "./list-item.ui";

const GetTotalCondition = function(x) {
  return !x.not_in_searching;
};

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = new (function() {
      this.entry = 4;
      this.current_page = 1;
      this.total = 0;
      this.from = -1;
      this.to = 0;
      this.disabled_prev = true;
      this.disabled_next = true;
    })();
    this.keyUpSearchTimeout = undefined;
    this.is_update_inside = false;
  }

  componentDidMount() {
    this.Init();
  }

  componentWillReceiveProps(newProps) {
    const { entry, current_page } = this.state;
    const { data } = newProps;
    if (!this.is_update_inside) {
      this.HandleDataWhenChanges(data, entry, current_page);
    } else {
      this.is_update_inside = false;
    }
  }

  componentWillUnmount() {}

  // events

  clickPrevious() {
    const { disabled_prev, current_page, entry } = this.state;
    if (!disabled_prev) {
      const currentPage = current_page > 0 ? current_page - 1 : current_page;
      const { data } = this.props;
      this.HandleDataWhenChanges(data, entry, currentPage);
      this.setState({ current_page: currentPage });
    }
  }

  clickNext() {
    const { disabled_next, current_page, entry } = this.state;
    if (!disabled_next) {
      const currentPage = current_page + 1;
      const { data } = this.props;
      this.HandleDataWhenChanges(data, entry, currentPage);
      this.setState({ current_page: currentPage });
    }
  }

  keyUpSearch(event) {
    clearTimeout(this.keyUpSearchTimeout);
    const { value } = event.target;
    const { onSearch } = this.props;
    const func = () => {
      onSearch(value);
    };
    this.keyUpSearchTimeout = setTimeout(func, 100);
  }

  // functions
  Init() {
    this.InitIndex();
    this.InitInfo();
  }

  InitIndex() {
    const { entry, current_page } = this.state;
    const { data } = this.props;
    this.HandleDataWhenChanges(data, entry, current_page);
  }

  InitInfo() {
    let realTotal = 0;
    let { from, to, disabled_next } = this.state;
    const { entry } = this.state;
    const { data } = this.props;

    realTotal = data.length;
    if (realTotal > 0) {
      from = 0;
      if (realTotal > entry) {
        to = entry;
        disabled_next = false;
      } else {
        to = realTotal;
      }
    }
    this.setState({
      total: realTotal,
      from,
      to,
      disabled_next
    });
  }

  HandleDataWhenChanges(pData = [], entryNumber, currentPage) {
    let data = pData;
    const { onChange } = this.props;
    const { length } = data.filter(GetTotalCondition);
    let from = 0;
    let to = 0;
    let disabled_prev = false;
    let disabled_next = false;
    let current_page = currentPage;
    const entry = +entryNumber;

    data = data.map(t => {
      const item = Object.assign({}, t);
      item.show = false;
      item.index = undefined;
      return item;
    });

    if (length > 0) {
      from = (current_page - 1) * entry;
      if (from >= length) {
        from = 0;
        current_page = 1;
      }

      to = from + entry;
      if (to >= length) {
        to = length;
        disabled_next = true;
      }
      if (from <= 0) {
        disabled_prev = true;
      }
      const realData = data.filter(GetTotalCondition);
      for (let i = from; i < to; i += 1) {
        const item = realData[i];
        item.index = i + 1;
        item.show = true;
      }
    } else {
      from = -1;
      to = 0;
      disabled_prev = true;
      disabled_next = true;
      current_page = 1;
    }
    this.setState({
      from,
      to,
      disabled_prev,
      disabled_next,
      current_page,
      total: length
    });
    onChange(data);
    this.is_update_inside = true;
  }

  render() {
    const props = {
      from: this.state.from,
      to: this.state.to,
      total: this.state.total,
      disabled_prev: this.state.disabled_prev,
      disabled_next: this.state.disabled_next,
      children: this.props.children,
      data: this.props.data,
      keyUpSearch: this.keyUpSearch.bind(this),
      clickPrevious: this.clickPrevious.bind(this),
      clickNext: this.clickNext.bind(this)
    };
    return <ListItemUI {...props} />;
  }
}

ListItem.propTypes = {
  onSearch: PropTypes.func,
  data: PropTypes.instanceOf(Array),
  total: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.instanceOf(Array)
};
ListItem.defaultProps = {
  onSearch: () => {},
  data: [],
  total: 0,
  onChange: () => {},
  className: "",
  children: []
};

export default ListItem;
