import 'zone.js'; // ◄ เพิ่มบรรทัดนี้ไว้ที่แถวแรกสุดของไฟล์!
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.ts'; // หรือชื่อไฟล์หลักของคุณ

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));