import React, { Component } from "react";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//не понял почему не импортируется из общей библиотеки, сделал отдельно...
import {
  faCheckCircle,
  faTimesCircle,
  faCheck
} from "@fortawesome/free-regular-svg-icons";
class TableBody extends Component {
  renderCell = (item, column) => {
    const value = _.get(item, column.path);
    if (typeof value === "boolean")
      return value ? (
        <div className="bgiconscheck">
          <FontAwesomeIcon icon="check"></FontAwesomeIcon>
        </div>
      ) : (
        <div className="bgicondecline">
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
      );
    if (column.content) return column.content(item);
    return value;
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item[0]}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
