// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const dolphinsAverage = calcAverage(85, 54, 41);
// const koalasAverage = calcAverage(23, 34, 27);

// // console.log(dolphinsAverage,koalasAverage)
// checkWinner = (data1, data2) => {
//   if (data1 >= data2) {
//     console.log(`Dolphins win ${dolphinsAverage} vs. ${koalasAverage} `);
//   } else if (data1 <= data2) {
//     console.log(`Koalas win ${koalasAverage} vs. ${dolphinsAverage}`);
//   } else console.log("No team wins!");
// };

// checkWinner(dolphinsAverage, koalasAverage);

///////////

// const calcTip = (bill) => {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips);
// console.log(total);

//////////

// const calcBMI = (mass, height) => {
//   mass / height ** 2;
// };
// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// mark.calcBMI();
// john.calcBMI();

// console.log(mark);
// console.log(john);

// //////////
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (i = 0; i < bills.length; i++) {
//   const tip=calcTip(bills[i])
//   tips.push(tip)
//   totals.push(tip+bills[i])
// }
// console.log(bills, tips,totals)