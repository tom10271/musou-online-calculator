import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Weapon } from './Weapon';

@Component({
  selector: 'musou-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: [ './weapon.component.css' ]
})
export class WeaponComponent  {
  @Input() weapon: Weapon;
  @Output() onExperienceResolved = new EventEmitter();

  static fixMinMax(value, min, max): number {
    return Math.max(
      Math.min(max, value), min
    );
  }

  fixAttrMinMax(attrName, min, max): number {
    return this[attrName] = WeaponComponent.fixMinMax(this[attrName], min, max);
  }

  onOptionsChanged() {
    this.weapon.resolveExperienceProdvided();

    this.onExperienceResolved.emit();
  }
}
