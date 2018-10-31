import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: any;
  @Output() deleteEvent: EventEmitter<any> =
   new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteEvent.emit(this.item);
  }

}
