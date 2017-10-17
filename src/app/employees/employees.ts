import { CounterService } from './../../services/counter-service';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Employees {
  
  counter: number;

  constructor(
    private counterService: CounterService
  ) {
    this.counter = counterService.count;
  }
}