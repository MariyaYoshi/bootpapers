import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import Table from "./common/table";

class PaperTable extends Component {
  //method of checking the sort order
  columns = [
    {
      path: "symbol",
      label: "Рег. №",
      content: paper => <Link to={"/papers/" + paper._id}>{paper.symbol}</Link>
    },
    { path: "naming.name", label: "Наименование документа" },
    { path: "publishDate", label: "Дата создания" },
    { path: "author", label: "Автор" }
    //{key: delete}
    //{key: choose} TODO: может допилю вариант выбора документа
    //например можно добавить каждой колонке значек удаления
  ];

  render() {
    const { papers, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={papers}
      />
    );
  }
}

export default PaperTable;
