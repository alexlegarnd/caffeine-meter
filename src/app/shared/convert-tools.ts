import { CaffeineUnit, Unit, UnitCouple } from "./caffeine-unit";

export class ConvertTools {
    static convertToML(floz: number): number {
        return Math.round(floz * 29.5735296875);
    }

    static convertToFLOZ(ml: number): number {
        const res = ml / 29.5735296875;
        const roundedString = res.toFixed(2);
        const rounded = Number(roundedString);
        return rounded;
    }

    static convertUnitToG(u: UnitCouple): number {
        switch (u.unit) {
            case Unit.floz: return u.value * 29.57352956;
            case Unit.g: return u.value;
            case Unit.mg: return u.value / 1000;
            case Unit.ml: return u.value;
        }
    }

    static convertCaffeineUnitToG(u: CaffeineUnit, t: UnitCouple): number {
        let partOne = this.convertUnitToG(u.value);
        const partTwo = this.convertUnitToG(u.unit);
        const can = this.convertUnitToG(t);
        partOne / partTwo;
        partOne * can;
        return partOne;
    }
}