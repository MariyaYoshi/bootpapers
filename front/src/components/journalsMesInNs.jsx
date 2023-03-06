import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import {
  DateRangePicker
  // SingleDatePicker,
  // DayPickerRangeController
} from "react-dates";
import Pagination from "./common/pagination";
import {
  getJournalsMesInNs,
  getJournalsMesInImport
} from "../services/journalService";
import JournalMesInTable from "./journalMesInTable";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./common/searchBox";

class JournalMesInNs extends Component {
  state = {
    journals: [], // empty array against runtime error
    currentPage: 1,
    pageSize: 5,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
    //dates
    startDate: null,
    endDate: null,
    convertedDatesJournals: []
  };

  //for back-end services
  async componentDidMount() {
    console.log("COMPONENT DID MOUNT");
    //holding result of async operations (that is going to complete in a future)

    const { data: journals } = await getJournalsMesInNs();
    console.log(journals);
    this.setState({ journals });
  }

  async handleImport() {
    console.log("UPDATING...");
    //holding result of async operations (that is going to complete in a future)
    const okNotOk = await getJournalsMesInImport();
    console.log(okNotOk);
    //okNotOk ? console.log("GREAT ITS OK!") : console.log("SOMETHING IS NOT OK");
  }

  dateFinderAndParser = itemValue => {
    const reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
    console.log(itemValue);

    if (reISO.exec(itemValue)) return new Date(itemValue);
    else return itemValue;
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedType: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      searchQuery,
      sortColumn,
      convertedDatesJournals,
      journals: allJournals
    } = this.state;
    let filtered = allJournals;
    // for (let item in allJournals) {
    //   convertedDatesJournals.push(this.dateFinderAndParser(item.values));
    // }
    //console.log(convertedDatesJournals);
    if (searchQuery)
      filtered = allJournals.filter(p =>
        p.c_addrobjs.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const journals = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: journals };
  };

  render() {
    const { length: count } = this.state.journals;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    if (count === 0) return <p>В базе отсутствуют журналы.</p>;
    const { totalCount, data: journals } = this.getPagedData();
    return (
      <div className="container-fluid">
        <div className="p-3 border bg-light">
          <div className="row">
            <div className="col-6">
              <h5>
                Журнал входящих сообщений. Всего {totalCount}
                документов.
              </h5>
            </div>
            <div className="col-3 text-right">
              <div>
                <button className="btn btn-primary" onClick={this.handleImport}>
                  ИМПОРТ
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <SearchBox
              value={searchQuery}
              onChange={this.handleSearch}
              placeholder="Поиск по направлению отправителя"
            />
          </div>

          <div className="col">
            <div className="p-2 border-0 text-center">
              <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ startDate, endDate })
                } // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              />
            </div>
          </div>
        </div>

        {
          <JournalMesInTable
            sortColumn={sortColumn}
            journals={journals}
            // onDelete={this.handleDeleteJournals}
            onSort={this.handleSort}
          />
        }
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}
export default JournalMesInNs;
