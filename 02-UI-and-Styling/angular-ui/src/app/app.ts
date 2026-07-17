import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule], // ◄ เอาพวก RouterOutlet หรือ Component อื่นออกให้เกลี้ยง
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  text: string = 'Hello, Angular! Aj.M';
}