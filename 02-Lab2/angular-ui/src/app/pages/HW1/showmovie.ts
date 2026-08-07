import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import jsonData from '../../../assets/movie.json';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-showmovie',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './showmovie.html',
  styleUrls: ['./showmovie.css']
})
export class Showmovie implements OnInit {
  movieData = jsonData[0];
  
  faHeart = faHeart;

  videoUrl!: SafeResourceUrl;
  private sanitizer = inject(DomSanitizer);
  ngOnInit(): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movieData.videoUrl);
  }
}
