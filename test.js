function calc(x, y) {
  let z;
  for(z = 0; z<= y; z++) {
    x+=z;
  }
  return x;
}
console.log(calc(0, 36));
