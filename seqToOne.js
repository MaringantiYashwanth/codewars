function seqToOne(n) {
  let arr = [];
  if (n > 0) {
    for (let i = n; i >= 1; i--) {
      arr.push(i);
    }
  } else if (n <= 0) {
    for (let i = n; i <= 1; i++) {
      arr.push(i);
    }
  }
  return arr;
}
