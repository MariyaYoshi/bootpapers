import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import Table from "./common/table";

class ClassifierPersonTypeTable extends Component {
  getKeys() {
    return Object.keys(this.props.classifiers);
  }
  //method of checking the sort order
  columns = [
    {
      path: "tdpd_dol",
      label: "Должность"
      // content: classifier => (
      //   <Link to={"/classifiers/" + classifier.tdest_key}>
      //     {classifier.tdest_code}
      //   </Link>
      //),
    },
    { path: "tdpd_address", label: "Адрес" },
    { path: "tdpd_prname", label: "Важность" },

    { path: "tdpd_notes", label: "Примечание" },
    {
      path: "tdpd_zvan",
      label: "Тип"
    },
    {
      path: "tdpd_fam",
      label: "Фамилия"
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

export default ClassifierPersonTypeTable;
