import { Component, Input } from '@angular/core';
import { Count } from '../../interfaces/count.interface';

@Component({
  selector: 'things-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {

  @Input()
  public countList:Count[] = [{
    name:'Martin',
    number: 987654321,
    count:['BCP']
  }]
}
