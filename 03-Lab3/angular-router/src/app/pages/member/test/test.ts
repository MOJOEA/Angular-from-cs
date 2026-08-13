import { Component, input } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  id = input.required<number>();
  userId = input.required<number>();
  fullname = input.required<string>();
}