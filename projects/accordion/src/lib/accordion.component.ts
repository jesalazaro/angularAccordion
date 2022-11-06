import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, SimpleChanges } from '@angular/core';


@Component({
  selector: 'lib-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  animations: [
    trigger('smoothCollapse',[
      state('initial', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('final', style({
        overflow: 'hidden'
      })),
      transition('initial<=>final', animate('250ms'))
    ]),
    trigger('rotatedStateOpen',[
      state('default', style({transform: 'rotate(0)'})),
      state('rotated', style({transform: 'rotate(180deg)'})),
      transition('default <=> rotated', animate('250ms'))
    ]),
    trigger('rotatedStateClose',[
      state('default', style({transform: 'rotate(0)'})),
      state('rotated', style({transform: 'rotate(-180deg)'})),
      transition('default <=> rotated', animate('250ms'))
    ]),
  ]
})
export class AccordionComponent implements OnInit {

  @Input() activate: string = "";
  @Input() title: string = "";
  @Output() closeOtherPanels: EventEmitter<string> = new EventEmitter();

  active : boolean = false;



  ngOnChanges(changes : SimpleChanges){
  if(changes?.['activate']){
    this.active = this.activate == this.title;
  }
}

  toggle() {
    this.active = !this.active;
    if(this.active){
      this.closeOtherPanels.emit(this.title);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
  

}
