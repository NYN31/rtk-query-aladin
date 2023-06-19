export const days = () => {
  let days = [];
  for (let i = 1; i <= 31; i++) {
    if (i === 1 || i === 21 || i === 31) days.push({ id: i, value: i + 'st' });
    else if (i === 2 || i === 22) days.push({ id: i, value: i + 'nd' });
    else if (i === 3 || i === 23) days.push({ id: i, value: i + 'rd' });
    else days.push({ id: i, value: i + 'th' });
  }

  return days;
};

export const months = [
  { key: '01', value: 'January', bdValue: 'জানুয়ারি' },
  { key: '02', value: 'February', bdValue: 'ফেব্রুয়ারী' },
  { key: '03', value: 'March', bdValue: 'মার্চ' },
  { key: '04', value: 'April', bdValue: 'এপ্রিল' },
  { key: '05', value: 'May', bdValue: 'মে' },
  { key: '06', value: 'June', bdValue: 'জুন' },
  { key: '07', value: 'July', bdValue: 'জুলাই' },
  { key: '08', value: 'August', bdValue: 'আগষ্ট' },
  { key: '09', value: 'September', bdValue: 'সেপ্টেম্বর' },
  { key: '10', value: 'October', bdValue: 'অক্টোবর' },
  { key: '11', value: 'November', bdValue: 'নভেম্বর' },
  { key: '12', value: 'December', bdValue: 'ডিসেম্বর' },
];

export const years = () => {
  let currentYear = new Date().getFullYear() + 1;
  let minYear = currentYear - 2018 + 1;
  let years = [];
  for (let i = 0; i < minYear; i++) {
    years.push(currentYear - i);
  }
  return years;
};

export const isLeapYear = year => {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
};

export const getHumanReadableDate = (date, isShortFormMonth = true) => {
  const [year, month, day] = date.split('-');

  let newDay = Number(day);
  let newMonth = months.find(m => Number(m.key) === Number(month)).value;
  let newYear = year;
  if (isShortFormMonth) newMonth = newMonth.slice(0, 3);
  return `${newMonth} ${newDay}, ${newYear}`;
};

export const currentDate = () => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (day <= 9) day = '0' + day;
  if (month <= 9) month = '0' + month;
  return `${year}-${month}-${day}`;
};

export const oneMonthLessThanCurrentMonth = () => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  if (month === 1) {
    day = 1;
  } else {
    if (day > 28) day = 28;
    month -= 1;
  }
  let year = date.getFullYear();
  if (day <= 9) day = '0' + day;
  if (month <= 9) month = '0' + month;
  return `${year}-${month}-${day}`;
};

export const startingFromCurrentYear = () => {
  let year = new Date().getFullYear();
  return `${year}-01-01`;
};

export const getShortFormDate = (date, dayFirst = false) => {
  let [, month, day] = date.split('-');
  let monthFirstThreeLetter = months
    .find(m => Number(m.key) === Number(month))
    .value.slice(0, 3);

  if (dayFirst)
    return `${String(day).padStart(2, '0')} ${monthFirstThreeLetter}`;
  return `${monthFirstThreeLetter} ${day}`;
};
