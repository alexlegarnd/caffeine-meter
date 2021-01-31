import {Component, OnInit} from '@angular/core';
import {Day} from '../shared/day';
import {CaffeineUnit, Unit, UnitCouple} from '../shared/caffeine-unit';
import { ConvertTools } from '../shared/convert-tools';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  summary: Day[] = [
    {
      date: new Date(), items: [
        {
          drink: {
            id: 22,
            caffeine: {
              value: {
                value: 80,
                unit: Unit.g
              },
              unit: {
                value: 8.4,
                unit: Unit.floz
              }
            },
            name: 'RudBell',
            size: {
              value: 250,
              unit: Unit.ml
            }
          }
        },
        {
          drink: {
            id: 22,
            caffeine: {
              value: {
                value: 80,
                unit: Unit.g
              },
              unit: {
                value: 8.4,
                unit: Unit.floz
              }
            },
            name: 'RudBell',
            size: {
              value: 250,
              unit: Unit.ml
            }
          }
        }
      ]
    },
    {
      date: new Date(2021, 0, 30), items: [
        {
          drink: {
            id: 22,
            caffeine: {
              value: {
                value: 80,
                unit: Unit.g
              },
              unit: {
                value: 8.4,
                unit: Unit.floz
              }
            },
            name: 'RudBell',
            size: {
              value: 250,
              unit: Unit.ml
            }
          }
        },
        {
          drink: {
            id: 22,
            caffeine: {
              value: {
                value: 80,
                unit: Unit.g
              },
              unit: {
                value: 8.4,
                unit: Unit.floz
              }
            },
            name: 'RudBell',
            size: {
              value: 250,
              unit: Unit.ml
            }
          }
        }
      ]
    }
  ];

  currentCaffeine = 0;
  static maxCaffeine = 400;

  constructor() {
  }

  ngOnInit(): void {
    this.updateCaffeine();
  }

  getSizeUnit(u: UnitCouple): string {
    switch (u.unit) {
      case Unit.floz: return `${u.value} fl.oz (${ConvertTools.convertToML(u.value)} ml)`;
      case Unit.ml: return `${u.value} ml (${ConvertTools.convertToFLOZ(u.value)} fl.oz)`;
      case Unit.g: return `${u.value} g`;
      case Unit.mg: return `${u.value} mg`;
    }
  }

  getCaffeineUnitString(u: CaffeineUnit): string {
    let partOne = '';
    let partTwo = '';
    switch (u.value.unit) {
      case Unit.floz: partOne = `${u.value.value} fl.oz`; break;
      case Unit.ml: partOne = `${u.value.value} ml`; break;
      case Unit.g: partOne = `${u.value.value} g`; break;
      case Unit.mg: partOne = `${u.value.value} mg`; break;
    }
    switch (u.unit.unit) {
      case Unit.floz: partTwo = `${u.unit.value} fl.oz`; break;
      case Unit.ml: partTwo = `${u.unit.value} ml`; break;
      case Unit.g: partTwo = `${u.unit.value} g`; break;
      case Unit.mg: partTwo = `${u.unit.value} mg`; break;
    }
    return `${partOne}/${partTwo}`;
  }

  generateLabel(value: number): string {
    return `${value}g / ${DashboardComponent.maxCaffeine}g`;
  }

  getMaxCaffeine(): number {
    return DashboardComponent.maxCaffeine;
  }

  updateCaffeine() {
    this.currentCaffeine = this.getCaffeineByDay(new Date());
  }

  getCaffeineByDay(d: Date): number {
    let res = 0;
    const todays = this.summary.filter((s) => this.compareDate(s.date, d));
    for (let t of todays) {
      for (let i of t.items) {
        res += ConvertTools.convertCaffeineUnitToG(i.drink.caffeine, i.drink.size);
      }
    }
    return res;
  }

  compareDate(d1: Date, d2: Date) {
    if (d1.getFullYear() === d2.getFullYear()) {
      if (d1.getMonth() === d2.getMonth()) {
        if (d1.getDate() === d2.getDate()) {
          return true;
        }
      }
    }
    return false;
  }

}
