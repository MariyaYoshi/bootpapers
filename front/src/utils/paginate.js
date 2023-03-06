/* eslint-disable no-unused-vars */
import _ from "lodash";

//получить массив для пагинации
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
  //_.slice(items, startIndex)
  //_.take()
}
