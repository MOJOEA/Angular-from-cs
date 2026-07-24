import { Component, model } from '@angular/core';

@Component({
  selector: 'app-show-data',
  imports: [],
  templateUrl: './show-data.html',
  styleUrl: './show-data.css',
})
export class ShowData {
  textModelInShowData = model('');
}
