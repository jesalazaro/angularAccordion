import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    BrowserAnimationsModule,
  ],
  exports: [
    AccordionComponent
  ]
})
export class AccordionModule { }
