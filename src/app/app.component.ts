import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Em thích ăn Rau';
  tongSL: number = 5;
  tongTienGH: number = 350000;
  arrProduct = [
    {
      first: 'Thiện Lương',
      last: 'Otto',
      handle: '@mdo',
      image:
        'https://icons.veryicon.com/png/Culture/Real%20Vista%20Education/teacher.png',
      icon: '112212',
    },
    {
      first: 'Hoàng Dương Chân Nhân',
      last: '',
      handle: '',
      image:
        'https://icons.veryicon.com/128/Culture/Real%20Vista%20Education/graduated.png',
      icon: 'sadfsd',
    },
    {
      first: 'Tuấn Thành',
      last: 'bia đia',
      handle: '',
      image:
        'https://icons.veryicon.com/png/o/culture/little-fake-brother_-zodiac_-icon049/cattle-18.png',
      icon: 'rtghrèđf',
    },
    {
      first: 'Larry the Bird',
      last: 'ABC',
      handle: '@twitter',
      image: 'https://cdn-amz.woka.io/images/I/81Vr0-VQhOL.jpg',
      icon: 'clgt',
    },
  ];

  ngOnInit() {
    console.log('abc', this.title);
  }
}

export class ParentComponent {
  parentMessage: string = 'message from parent';

  constructor() {}
}
