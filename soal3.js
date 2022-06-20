let printSegitiga = 6;
if (typeof printSegitiga === "number") {
  for (i = printSegitiga; i >= 1; i--) {
    x = "";
    for (let j = i; j >= 1; j--) {
      x = j + " " + x;
    }
    console.log(x);
  }
} else {
  console.log("Data Harus Number");
}
