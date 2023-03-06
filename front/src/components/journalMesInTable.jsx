import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import TableBordered from "./common/tableBordered";

class JournalMesInTable extends Component {
  //method of checking the sort order
  columns = [
    {
      path: "c_regnum",
      label: "№ тлг"
    },
    { path: "ts_regtim", label: "Время отправки с направления отправителя" },
    {
      path: "c_addrobjs",
      label: "направление отправителя"
    },
    {
      path: "ts_timcnd",
      label: "Время приема на направление получателя"
    },
    {
      path: "i2_prc",
      label: "Вид сообщения"
    },
    {
      path: "i2_grf",
      label: "Тип"
    },
    {
      path: "i2_pri",
      label: "Категория важности"
    },
    {
      path: "i2_naddrr",
      label: "Количество адресатов"
    },
    {
      path: "i2_tlgwrd",
      label: "Количество слов"
    }
  ];

  render() {
    const { journals, sortColumn, onSort } = this.props;
    return (
      <TableBordered
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={journals}
      />
    );
  }
}

export default JournalMesInTable;
