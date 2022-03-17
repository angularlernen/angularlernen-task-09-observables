import { Component, OnInit } from '@angular/core';
import { EventResponse } from '../../api/event/event.response';
import { EventResource } from '../../api/event/event.resource';

@Component({
  selector: 'app-event-collection',
  templateUrl: './event-collection.component.html',
  styleUrls: ['./event-collection.component.css']
})
export class EventCollectionComponent implements OnInit {

  events: EventResponse[] = [];

  constructor(private _eventResource: EventResource) { }

  ngOnInit() {
    this.events = this._eventResource.findAll();
  }

}