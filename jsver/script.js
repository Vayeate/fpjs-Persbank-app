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

displayMovements(account1.movements);
