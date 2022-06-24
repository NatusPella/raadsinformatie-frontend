import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get('http://localhost:8123/api/v1/events', { observe: 'response' });
  }
}
