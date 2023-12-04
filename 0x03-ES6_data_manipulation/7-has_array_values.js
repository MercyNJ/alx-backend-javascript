export default function hasValuesFromArray(set, ary) {
  return ary.every((value) => set.has(value));
}
