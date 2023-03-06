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
    // {
    //   path: "tdest_key",
    //   label: "Рег. №",
    //   content: classifier => (
    //     <Link to={"/classifiers/" + classifier.tdest_key}>
    //       {classifier.tdest_key}
    //     </Link>
    //   )
    // },
    {
      path: "tdest_code",
      label: "Наименование",
      content: classifier => (
        <Link to={"/classifiers/" + classifier.tdest_key}>
          {classifier.tdest_code}
        </Link>
      )
    },
    { path: "tdest_date_pri", label: "Дата приписки" },
    { path: "tdest_date_otp", label: "Дата отписки" },

    { path: "tdest_date_address", label: "Адреса и номера телефонов" },
    {
      path: "tdest_date_order",
      label: "Порядок доставки телегр. корреспонденции"
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
