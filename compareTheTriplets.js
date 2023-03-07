function compareTriplets(a, b) {
  const list = [0, 0];
  for (let i = 0; i <= a.length; i++) {
    if (a[i] > b[i]) {
      list[0] += 1;
    }
    if (a[i] < b[i]) {
      list[1] += 1;
    }
  }
  return list;
}

const a = [12, 3, 67];
const b = [156, 1, 8];
console.log(compareTriplets(a, b));
