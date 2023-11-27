/* eslint-disable radix */
export default function iterateThroughObject(reportWithIterator) {
  let valueString = '';

  for (const [index, value] of Object.entries(reportWithIterator)) {
    valueString += `${value}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      valueString += ' | ';
    }
  }

  return valueString;
}
