export default function uniqueArrWithSet(arr = []) {
  return [...new Set(arr)];
}

uniqueArrWithReduce;

export function uniqueArrWithReduce(arr = []) {
  return arr.reduce((prev, cur) => {
    if (prev.indexOf(cur) === -1) {
      prev.push(cur);
    }
    return prev;
  }, []);
}
