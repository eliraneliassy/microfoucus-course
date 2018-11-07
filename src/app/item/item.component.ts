import { Component, OnInit, Input, Output, EventEmitter, OnChanges,
   DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  @Input() item: any;
  @Input() remove: boolean;
  @Output() deleteEvent: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() addToCartEvent: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() removeFromListEvent: EventEmitter<any> =
    new EventEmitter<any>();

  constructor(
  ) {
    console.log('From CTOR');
  }

  ngOnInit() {
    console.log('FROM ON INIT');
  }

  delete() {
    this.deleteEvent.emit(this.item);
  }

  addToCart() {
    this.addToCartEvent.emit(this.item);
  }

  ngOnDestroy(): void {
    console.log('ON DESTROY');
  }
  ngAfterViewChecked(): void {
    console.log('After view checked');
  }
  ngAfterViewInit(): void {
    console.log('After View Init');
  }
  ngAfterContentChecked(): void {
    console.log('After Content Checked');
  }
  ngAfterContentInit(): void {
    console.log('After Content Init');
  }
  ngDoCheck(): void {
    console.log('Do Check');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('FROM CHANGES: ', changes);
  }

  removeFromList() {
    this.removeFromListEvent.emit(this.item);
  }

}
