import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';

import { DataBinding } from './pages/data-binding/data-binding';
import { ShowData } from './pages/show-data/show-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FontAwesomeModule, DataBinding, ShowData],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-ui');
  faCoffee = faCoffee; // ประกาศตัวแปรเพื่อนำไปใช้ใน HTML
  faUser = faUser;
}