import { Count } from './../interfaces/count.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thing-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  public counts:Count[] =  [{
    name: 'Roberto',
    number: 123456789,
    count: ['Interbank']
  }]
}