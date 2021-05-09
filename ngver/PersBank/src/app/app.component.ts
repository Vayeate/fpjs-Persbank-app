import { Component } from '@angular/core';
import { accounts } from '/home/vayeate/Documents/fpjs/ngver/PersBank/src/app/accounts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PersBank';
  accounts = accounts;
}
