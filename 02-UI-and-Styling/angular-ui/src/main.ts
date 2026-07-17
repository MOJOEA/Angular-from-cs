import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// แก้จุดนี้: เปลี่ยนจาก { App } เป็น { AppComponent }
import { AppComponent } from './app/app'; 

// แก้จุดนี้: เปลี่ยนจาก App เป็น AppComponent
bootstrapApplication(AppComponent, appConfig) 
  .catch((err) => console.error(err));
