import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import Table from "./common/table";

class ClassifierListsTrTable extends Component {
  getKeys() {
    return Object.keys(this.props.classifiers);
  }
  //method of checking the sort order
  columns = [
    {
      path: "c_addrobjr",
      label: "Тип"
    },
    { path: "c_addrcmpr", label: "Адрес" },
    { path: "c_addrnamr", label: "Место, должность, фамилия " }
    //{key: delete}
    //{key: choose} TODO: может допилю вариант выбора документа
    //например можно добавить каждой колонке значек удаления
  ];

  render() {
    const { classifiers, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={classifiers}
      />
    );
  }
}

export default ClassifierListsTrTable;
