import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import Table from "./common/table";

class ClassifierListsTable extends Component {
  getKeys() {
    return Object.keys(this.props.classifiers);
  }
  //method of checking the sort order
  columns = [
    {
      path: "tlst_name",
      label: "Наименование"
    },
    { path: "tlst_descr", label: "Описание" }

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

export default ClassifierListsTable;
