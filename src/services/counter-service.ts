import { CounterPayload } from './../payload/counter-payload';
import { autoinject } from 'aurelia-dependency-injection';
import { EventAggregator } from "aurelia-event-aggregator";

@autoinject
export class CounterService {

  count = 0;

  constructor(
    private eventAggregator: EventAggregator
  ) {

  }

  increaseCount(): void {
    this.count++;
    this.eventAggregator.publish(new CounterPayload(this.count));
  }
}