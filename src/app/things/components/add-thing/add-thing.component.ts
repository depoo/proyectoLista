import { Component } from '@angular/core';
import { Count } from '../../interfaces/count.interface';

@Component({
  selector: 'add-thing',
  templateUrl: './add-thing.component.html',
  styles: [
  ]
})
export class AddThingComponent {

  public nameCount:string[] = ['BCP', 'INTERBANK', 'SCOTIABANK', 'BBVA'];

  public personCount:Count = {
    name:   '',
    number: 1,
    count:  this.nameCount
  }
}
