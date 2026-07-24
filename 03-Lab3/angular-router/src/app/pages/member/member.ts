import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [RouterOutlet, RouterLink], 
  templateUrl: './member.html',
  styleUrl: './member.css'
})
export class Member { }
