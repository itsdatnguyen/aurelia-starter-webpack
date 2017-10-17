import { CounterPayload } from './../../payload/counter-payload';
import { EventAggregator } from 'aurelia-event-aggregator';
import { CounterService } from './../../services/counter-service';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Home {

  counter: number;
  
  constructor(
    private counterService: CounterService,
    private eventAggregator: EventAggregator
  ) {
    this.counter = this.counterService.count;

    this.eventAggregator.subscribe(CounterPayload, (payload: CounterPayload) => {
      this.counter = payload.counter;
    });
  }

  incrementClicked() {
    this.counterService.increaseCount();
  }
}