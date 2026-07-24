import { Component } from '@angular/core';

@Component({
  selector: 'app-showmovie',
  imports: [],
  templateUrl: './showmovie.html',
  styleUrl: './showmovie.css',
})
export class Showmovie {
  private sanitizer = inject(DomSanitizer);

  mode = signal<'light' | 'dark'>('light');
  posterImage1 = 'assets/Poster.png';
  youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/bjqEWgDVPe0?si=mDz6AhP6qWB7h32h'
  );

  handleToggleMode() {
    this.mode.update((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }
}