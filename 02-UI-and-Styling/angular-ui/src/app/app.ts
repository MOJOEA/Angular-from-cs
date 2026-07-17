import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// เปลี่ยนเส้นทางจากเดิม ให้ชี้ไปที่โฟลเดอร์และไฟล์ที่ชื่อ header ตรงๆ
import { HeaderComponent } from './components/header/header';
 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'angular-ui';
}
