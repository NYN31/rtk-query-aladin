import { MAX_DAY_OF_EACH_MONTH } from '../constants/commonConstants';
import { isLeapYear } from './utils';

export const makeCalendarForDate = date => {
  let [year, month] = date.split('-');

  let obj = [];
  const firstDateOfTheMonth = new Date(`${year}/${month}/1`).getDay();
  let val = 1;
  let rows = 6,
    cols = 7;

  let firstRow = [0, 0, 0, 0, 0, 0, 0];
  for (let i = firstDateOfTheMonth; i < cols; i++) {
    firstRow[i] = val;
    val += 1;
  }
  obj.push(firstRow);

  let maxDayOfEachMonth;
  if (Number(month) === 1) maxDayOfEachMonth = isLeapYear(year) ? 29 : 28;
  else maxDayOfEachMonth = MAX_DAY_OF_EACH_MONTH[Number(month)];

  for (let row = 1; row < rows && val <= maxDayOfEachMonth; row++) {
    let nextRow = [0, 0, 0, 0, 0, 0, 0];
    for (let j = 0; j < cols && val <= maxDayOfEachMonth; j++) {
      nextRow[j] = val;
      val += 1;
    }
    obj.push(nextRow);
  }

  return obj;
};
