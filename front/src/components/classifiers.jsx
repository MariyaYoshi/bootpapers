import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import Pagination from "./common/pagination";
import { getClassifiersDest } from "../services/classifierService";
import { paginate } from "../utils/paginate";
import ClassifierDestTable from "./classifierDestTable";
import _ from "lodash";
import SearchBox from "./common/searchBox";

class Classifiers extends Component {
  state = {
    classifiers: [], // empty array against runtime error
    currentPage: 1,
    pageSize: 5,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
    //dates
    startDate: null,
    endDate: null
  };

  //for back-end services
  async componentDidMount() {
    console.log("COMPONENT DID MOUNT");
    //holding result of async operations (that is going to complete in a future)

    const { data: classifiers } = await getClassifiersDest();
    //console.log(classifiers);

    this.setState({ classifiers });
    //const types = [{ _id: "", name: "Все документы" }, ...getTypes()];
    //this.setState({ classifiers: getClassifiers() });
  }

  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  // handleDeleteClassifiers = paperId => {
  //   const classifiers = this.state.classifiers.filter(c => c._id !== paperId);
  //   this.setState({ classifiers });
  // };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      searchQuery,
      sortColumn,
      classifiers: allClassifiers
    } = this.state;
    let filtered = allClassifiers;
    if (searchQuery)
      filtered = allClassifiers.filter(p =>
        p.tdest_code.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const classifiers = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: classifiers };
  };

  render() {
    const { length: count } = this.state.classifiers;
    let querySend = "";
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    if (count === 0) return <p>В базе отсутствуют документы.</p>;

    const { totalCount, data: classifiers } = this.getPagedData();

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <div className="p-3 border bg-light">
              <h5> Документы</h5>
              <div>
                <button
                  className="btn btn-primary"
                  onClick={() => (querySend = "select f_ktos_tab_dest();")}
                >
                  Место доставки
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => (querySend = "select persontype();")}
                >
                  Место доставки
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    (querySend = "select f_ktos_tab_directions();")
                  }
                >
                  Место доставки
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h5>Журнал учета документов.</h5>
              {this.state.selectedType && (
                <h5>Всего {totalCount} документов.</h5>
              )}
              <div className="row">
                <div className="col-6">
                  <SearchBox
                    value={searchQuery}
                    onChange={this.handleSearch}
                    placeholder="Поиск по имени"
                  />
                </div>

                <div className="col">
                  <div className="p-4 text-left">
                    {searchQuery && <h5>найдено {totalCount}.</h5>}
                  </div>
                </div>
              </div>
              <ClassifierDestTable
                sortColumn={sortColumn}
                classifiers={classifiers}
                // onDelete={this.handleDeleteClassifiers}
                onSort={this.handleSort}
              />
              <Pagination
                itemsCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Classifiers;
