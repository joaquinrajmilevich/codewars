function longest(s1, s2) {
  let set = new Set(s1 + s2);
  return [...set].sort().join("");
}

// console.log(longest("aretheyhere", "yestheyarehere"));

function toCamelCase(str) {
  let arr = str.match(/[a-zA-Z]+/g);
  arr[0].charAt(0).toLowerCase() + arr[0].slice(1);
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join("");
}
console.log(toCamelCase("A-B-C"));
