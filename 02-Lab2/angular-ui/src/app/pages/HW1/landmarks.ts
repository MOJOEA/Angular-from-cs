import { Component, signal } from '@angular/core';
import jsonData from '../../../assets/landmark.json';

@Component({
  selector: 'app-landmarks',
  standalone: true,
  imports: [],
  templateUrl: './landmarks.html',
  styleUrl: './landmarks.css',
})
export class Landmarks {
  landmarks = jsonData;
  landmarkData = signal<any[]>(jsonData);

  options = [...new Set(jsonData.map(item => item.country))];

  loadLandmarks() {
    this.landmarkData.set(this.landmarks);
  }

  constructor() {
    console.log(this.landmarks);
  }

  // ฟังก์ชันสำหรับค้นหาสถานที่ท่องเที่ยวตาม ID
  findOne(id: HTMLInputElement) {
    if (!id.value) {
      this.landmarkData.set(this.landmarks);
      return;
    }
    const landmark = this.landmarks.find((l) => l.idx === Number(id.value));
    console.log(landmark);   
    this.landmarkData.set(landmark ? [landmark] : []); 
  }

  // ฟังก์ชันสำหรับค้นหาสถานที่ท่องเที่ยวตามชื่อ
  findByName(name: HTMLInputElement) {
    const filteredLandmarks = this.landmarks.filter((l) => l.name.toLowerCase().includes(name.value.toLowerCase()));
    console.log(filteredLandmarks);   
    this.landmarkData.set(filteredLandmarks); 
  }

  // ฟังก์ชันสำหรับค้นหาสถานที่ท่องเที่ยวตามประเทศ
  findByCountry(country: HTMLSelectElement) {
    const filteredLandmarks = this.landmarks.filter((l) => l.country === country.value);
    console.log(filteredLandmarks);   
    this.landmarkData.set(filteredLandmarks); 
  }
}