"use strict";

///////PersBank

// Data
const account1 = {
  owner: "Aleksei Uljassov",
  movements: [50, 450, -250, 1500, -350, -130, -70, 800],
  interestRate: 1.2, // %
  pin: 1111
};

const account2 = {
  owner: "Kaire Krants",
  movements: [2500, 700, -150, -790, -3210, -1000, 8500, -300],
  interestRate: 1.5,
  pin: 2222
};

const accounts = [account1, account2];

const containerMovements = document.querySelector(".movements");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");

const displayMovements = function(movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function(mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i +
      1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  //   const interest = acc.movements
  //     .filter(mov => mov > 0)
  //     .map(deposit => (deposit * acc.interestRate) / 100)
  //     .filter((int, i, arr) => {
  //       //console.log(arr);
  //       return int >= 1;
  //     })
  //     .reduce((acc, int) => acc + int, 0);
  //   labelSumInterest.textContent = `${interest}€`;
};

displayMovements(account1.movements);
calcDisplayBalance(account1);
calcDisplaySummary(account1);
