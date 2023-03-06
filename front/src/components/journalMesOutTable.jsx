import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import TableBordered from "./common/tableBordered";

class JournalMesOutTable extends Component {
  //method of checking the sort order
  columns = [
    {
      path: "c_regnum",
      label: "N тлг"
    },
    { path: "ts_timrcvot", label: "Рег(Дата/Время)" },
    { path: "c_podpnum", label: "рег N" },

    { path: "c_podpdat", label: "Дата подписания" },
    {
      path: "c_addrobjtl",
      label: "Направление отправителя"
    },
    {
      path: "c_podpdest",
      label: "Место отправителя"
    },
    {
      path: "c_podpdol",
      label: "Должность отправителя"
    },
    {
      path: "c_podpnam",
      label: "Отправитель"
    },
    {
      path: "ts_timotdot",
      label: "Дата установления связи приема"
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
    }
    // {
    //   path: "i2_naddrr",
    //   label: "Количество адресатов"
    // },
    // {
    //   path: "i2_tlgwrd",
    //   label: "Количество слов"
    // }
    //{key: delete}
    //{key: choose} TODO: может допилю вариант выбора документа
    //например можно добавить каждой колонке значек удаления
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

export default JournalMesOutTable;
