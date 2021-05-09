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
}
