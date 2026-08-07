import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // สเตตเก็บสถานะการเปิด/ปิดเมนูดรอปดาวน์ของปุ่ม Home
  isDropdownOpen: boolean = false;

  // ฟังก์ชันคลิกเพื่อเปิด-ปิดดรอปดาวน์
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // ฟังก์ชันปิดดรอปดาวน์ทันทีเมื่อยูสเซอร์กดเปลี่ยนหน้าไปแล้ว
  closeDropdown(): void {
    this.isDropdownOpen = false;
  }
}
