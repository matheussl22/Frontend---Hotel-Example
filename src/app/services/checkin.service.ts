import { Injectable } from '@angular/core';
import {Checkin} from '../models/checkin.model';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  checkins: Checkin[];
  constructor() {
    this.checkins = [];
  }

  getCheckins() {
    if (localStorage.getItem('checkins') === null) {
      this.checkins = [];
    } else {
      this.checkins = JSON.parse(localStorage.getItem('checkins'));
    }
    return this.checkins;
  }

  addCheckin(checkin: Checkin) {
    if (checkin.pessoa != null) {
      this.checkins.push(checkin);
      let checkins = [];
      if (localStorage.getItem('checkins') === null) {
        checkins = [];
        checkins.push(checkin);
        localStorage.setItem('checkins', JSON.stringify(checkins));
      } else {
        checkins = JSON.parse(localStorage.getItem('checkins'));
        checkins.push(checkin);
        localStorage.setItem('checkins', JSON.stringify(checkins));
      }
    }
  }

  deleteCheckin(checkin: Checkin) {
    for (let i = 0; i < this.checkins.length; i++) {
      if (checkin === this.checkins[i]) {
        this.checkins.splice(i, 1);
        localStorage.setItem('checkins', JSON.stringify(this.checkins));
      }
    }
  }
}
