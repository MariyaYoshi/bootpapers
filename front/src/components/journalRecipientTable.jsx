import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import Table from "./common/table";

class ClassifierdestTable extends Component {
  getKeys() {
    return Object.keys(this.props.classifiers);
  }
  //method of checking the sort order
  columns = [
    {
      path: "i2_addridxr",
      label: "№ ПП",
      content: classifier => (
        <Link to={"/classifiers/" + classifier.tdest_key}>
          {classifier.tdest_code}
        </Link>
      )
    },
    { path: "c_addrobjr", label: "Направление получателя" },
    { path: "c_addrnamr", label: "Получатель" },

    { path: "c_addrcmpr", label: "Код" },
    {
      path: "ts_timtl",
      label: "Время передачи с направления отправителя"
    },
    {
      path: "ts_timman",
      label: "Доведение до оператора"
    },
    {
      path: "c_usernamman",
      label: "Оператор"
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

export default ClassifierdestTable;
