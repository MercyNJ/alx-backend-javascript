export default function createIteratorObject(report) {
  const emplarray = [];
  for (const item of Object.values(report.allEmployees)) {
    emplarray.push(...item);
  }

  return emplarray;
}
