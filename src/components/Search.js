import React, { Component } from "react";
import { Input, List } from "antd";
import StationList from "./StationList";

export default class Search extends Component {
  state = {
    inputValue: ""
  };

  handleChange = event => {
    const inputValue = event.target.value;
    this.setState(() => ({ inputValue }));
  };

  render() {
    const { inputValue } = this.state;
    const { stations, history } = this.props;
    const filtered = stations.filter(station =>
      station.commonName.toLowerCase().includes(inputValue.toLowerCase())
    );
    return (
      <div className="search">
        <div className="search__input-wrapper">
          <Input.Search
            value={inputValue}
            onChange={this.handleChange}
            enterButton
            onSearch={() => history.push(`/station/${filtered[0].naptanId}`)}
            placeholder="Station e.g. West Ham, Canning Town"
            size="large"
          />
        </div>
        <StationList stations={filtered} />
      </div>
    );
  }
}
