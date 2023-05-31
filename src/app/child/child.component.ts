import { Component, Input, OnInit } from '@angular/core';
import { DuLieuTongService } from '../du-lieu-tong.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string = '';

  constructor(private data: DuLieuTongService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.data.changeMessage('Hello from Sibling');
  
  }
}
