import { Component } from '@angular/core';
import { accounts } from './accounts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PersBank';
  accounts = accounts;
  labelBalance;

  displayMovements = function(movements) {
    movements.innerHTML = '';

    movements.forEach(function(mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';

      const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i +
        1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>`;
      movements.insertAdjacentHTML('afterbegin', html);
    });
  };

  calcDisplayBalance(acc) {
    return (acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0));
    //labelBalance.textContent = `${acc.balance}€`;
  }

  calcDisplaySummaryIn(acc) {
    const incomes = acc.movements
      .filter(mov => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
    //labelSumIn.textContent = `${incomes}€`;
    return incomes;
  }

  calcDisplaySummaryOut(acc) {
    const out = acc.movements
      .filter(mov => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
    //labelSumOut.textContent = `${Math.abs(out)}€`;
    return out;
  }

  getAllOut() {
    // this.accounts
    return 'very many dollars';
  }
}
