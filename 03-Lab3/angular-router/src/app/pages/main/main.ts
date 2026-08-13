import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements OnInit { 
  public members: any[] = [];
  public username: string | null = null;

  ngOnInit() {
    const sessionData = sessionStorage.getItem('members');
    if (sessionData) {
      this.members = JSON.parse(sessionData); 
      this.username = this.members[0]?.fullname || null;
    }
    console.log('ข้อมูลจาก Session:', this.username);
  }
}
