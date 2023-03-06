import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import Table from "./common/table";

class ClassifierTdrcTable extends Component {
  getKeys() {
    return Object.keys(this.props.classifiers);
  }
  getBoolValueIcon = path => {
    if (this.props.classifiers.path.value === false)
      return <FontAwesomeIcon icon="sort-up" />;
    return <FontAwesomeIcon icon="sort-down" />;
  };
  //method of checking the sort order
  columns = [
    {
      path: "tdrc_name",
      label: "Направление"
    },
    { path: "tdrc_name_rod", label: "Направление" },
    { path: "tdrc_direct_to_m", label: "Основное направление" },

    { path: "tdrc_direct_to_a", label: "Альтернативное направление" },
    {
      path: "tdrc_flg_m",
      label: "Флаг(m)"
    },
    {
      path: "tdrc_flg_a",
      label: "Флаг (a)"
    },
    {
      path: "tdrc_flg_e",
      label: "Флаг (e)"
    },
    {
      path: "tdrc_flg_i",
      label: "Флаг (i)"
    },
    {
      path: "tdrc_flg_t",
      label: "Флаг (t)"
    },
    {
      path: "tdrc_flg_s",
      label: "Флаг (s)"
    }
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

export default ClassifierTdrcTable;
