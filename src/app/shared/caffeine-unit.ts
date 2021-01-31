export enum Unit {
  floz,
  ml,
  mg,
  g
}

export class CaffeineUnit {
  value: UnitCouple;
  unit: UnitCouple
}

export class UnitCouple {
  value: number;
  unit: Unit;
}
