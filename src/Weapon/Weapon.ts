export class Weapon {
  baseExperience:number = 45000;
  isSameTypeOfWeapon = false;
  nModified:number = 0;
  nLegendarizes:number = 0;
  nStonesUsed:number = 0;
  isBoostingOn = false;
  count: number = 1;
  nPillsForLengendize: number = 0;

  static fixMinMax(value, min, max): number {
    return Math.max(
      Math.min(max, value), min
    );
  }

  fixAttrMinMax(attrName, min, max): number {
    return this[attrName] = Weapon.fixMinMax(this[attrName], min, max);
  }

  resolveExperienceProdvided() {
    this.baseExperience = this.isSameTypeOfWeapon ? 50400 : 45000;
    this.fixAttrMinMax('nLegendarizes', 0, 3);
    this.fixAttrMinMax('nModified', 0, 5);
    this.fixAttrMinMax('nStonesUsed', 0, 29);

    let boost = this.isBoostingOn ? 2 : 1;

    return this.count * Math.round(
      this.baseExperience * (
        1 + (
          this.nLegendarizes * .2 +
          this.nModified * .1
        )
      ) * (
        1 + this.resolveStoneUsedMultipler()
      )
    );
  }

  resolveStoneUsedMultipler(): number {
    if (this.nStonesUsed < 21) {
      return 0;
    } else {
      return (this.nStonesUsed - 20) * .05;
    }
  }
}