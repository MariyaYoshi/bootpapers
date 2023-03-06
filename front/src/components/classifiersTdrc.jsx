import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import Pagination from "./common/pagination";
import {
  getClassifiersTdrc,
  getClassifiersTdrcImport
} from "../services/classifierService";
import { paginate } from "../utils/paginate";
import ClassifierTrdcTable from "./classifierTdrcTable";
import _ from "lodash";
import SearchBox from "./common/searchBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

    const { data: classifiers } = await getClassifiersTdrc();
    //console.log(classifiers);

    this.setState({ classifiers });
    //const types = [{ _id: "", name: "Все документы" }, ...getTypes()];
    //this.setState({ classifiers: getClassifiers() });
  }

  async handleImport() {
    console.log("UPDATING...");
    //holding result of async operations (that is going to complete in a future)
    const okNotOk = await getClassifiersTdrcImport();
    console.log(okNotOk);
    //okNotOk ? console.log("GREAT ITS OK!") : console.log("SOMETHING IS NOT OK");
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
        p.tdrc_direct_to_m.toLowerCase().startsWith(searchQuery.toLowerCase())
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
            <div className="p-3 border bg-light  text-center">
              <h4>Импорт</h4>
              <FontAwesomeIcon icon="sync"></FontAwesomeIcon>

              <div>
                <button className="btn btn-primary" onClick={this.handleImport}>
                  направления передачи
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h5>направления передачи. Всего {totalCount} документов.</h5>
              <div className="row">
                <div className="col-6">
                  <SearchBox
                    value={searchQuery}
                    onChange={this.handleSearch}
                    placeholder="Поиск по основному направлению"
                  />
                </div>
              </div>
              <ClassifierTrdcTable
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
