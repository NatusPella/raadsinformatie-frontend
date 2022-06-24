import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  events = null;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents()
      // clone the data object, using its known Config shape
      .subscribe((data) => this.events = { ...data });
  }

}
