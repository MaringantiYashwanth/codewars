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

  // another way to solve
  //   const arr2 = [];
  //   while (n !== 1) {
  //     if (n > 1) {
  //       arr.push(n--);
  //     } else {
  //       arr.push(n++);
  //     }
  //   }
  //   arr.push(1);
  //   return arr;

  // most optimal method
  //   return [...Array(Math.abs(n - 1) + 1)].map((_, i) => (n < 1 ? n + i : n - i));
  // const length = num > 1 ? num: 2 - num;
  // const sequence = (_, i) => num + (num > 1 ? -i : i);
  // return Array.from({length}, sequence);

  // return Array.from({length: Math.abs(n - 1) + 1}, (_, i) => n + (n < 1? i: -i))
}
