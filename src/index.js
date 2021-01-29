module.exports = function reverse (n) {
  let res = Math.abs(n);
  res = String(res).split("").reverse().join("");
  return Number(res);
}
