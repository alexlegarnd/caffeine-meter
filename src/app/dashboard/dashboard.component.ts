import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from '@fullcalendar/angular';
import {Day} from '../shared/day';
import {Unit} from '../shared/caffeine-unit';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  summary: Day[] = [
    {
      date: new Date(), items: [
        {
          drink: {
            id: 22,
            caffeine: {
              value: 50,
              unit: Unit.mgml
            },
            name: 'RudBell',
            size: {
              value: 100,
              unit: Unit.ml
            }
          }
        },
        {
          drink: {
            id: 22,
            caffeine: {
              value: 50,
              unit: Unit.mgml
            },
            name: 'RudBell',
            size: {
              value: 100,
              unit: Unit.ml
            }
          }
        },
        {
          drink: {
            id: 22,
            caffeine: {
              value: 50,
              unit: Unit.mgml
            },
            name: 'RudBell',
            size: {
              value: 100,
              unit: Unit.ml
            }
          }
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  getUnitString(u: Unit): string {
    switch (u) {
      case Unit.floz:
        return 'fl.oz';
      case Unit.ml:
        return 'ml';
      case Unit.mgfloz:
        return 'mg/fl.oz';
      case Unit.mgml:
        return 'mg/ml';
    }
  }

}
