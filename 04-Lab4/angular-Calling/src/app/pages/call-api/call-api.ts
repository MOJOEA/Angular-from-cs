import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';
import { lastValueFrom } from 'rxjs';
import { TripsGetResponse } from '../../model/trips-get-res';

@Component({
  selector: 'app-call-api',
  imports: [],
  templateUrl: './call-api.html',
  styleUrl: './call-api.css',
})
export class CallApi {
  // ใช้ inject() เพื่อดึง HttpClient มาใช้งานในคอมโพเนนต์นี้
  http = inject(HttpClient);
  trips = signal<TripsGetResponse[]>([]);

  async callApi() {
    // เรียกใช้ HttpClient เพื่อส่งคำขอ GET ไปยัง API ที่กำหนด และรับผลลัพธ์ที่ได้ หลังจากทำงานเสร็จ
    // this.http.get('http://localhost:3000/trips').subscribe((response) => {
    //   console.log(response);
    // });

    // ใช้ async/await เพื่อรอผลลัพธ์จากการเรียก API ก่อนที่จะดำเนินการต่อ
    const res = await lastValueFrom(
      this.http.get('http://localhost:3000/trips'),
    );
    this.trips.set(res as TripsGetResponse[]);
    console.log(this.trips());
    console.log(this.trips()[0].name);

    console.log('API call finished');
  }
}