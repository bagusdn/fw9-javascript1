let mtk = 100
let bind = 100
let bing = 90
let ipa = 0

const ave = (mtk + bind + bing + ipa)/4


if (typeof mtk === "number" && typeof bind === "number" && typeof bing === "number" && typeof ipa === "number" ) {

  if (ave <= 100 && ave >= 90) {
    console.log(`Rata - Rata = ${ave} \nGrade = A`)
  } else if (ave <= 89 && ave >= 80) {
    console.log(`Rata - Rata = ${ave} \nGrade = B`)
  } else if (ave <= 79 && ave >= 70) {
    console.log(`Rata - Rata = ${ave} \nGrade = C`)
  } else if (ave <= 69 && ave >= 60) {
    console.log(`Rata - Rata = ${ave} \nGrade = D`)
  } else {
    console.log(`Rata - Rata = ${ave} \nGrade = E`)
  }
} else {
  console.log("Tipe data Harus number");
}