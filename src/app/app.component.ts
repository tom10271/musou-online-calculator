import { Component } from '@angular/core';
import { EXP } from './expList';
import { Weapon } from '../Weapon/Weapon';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  targetLv = 0;
  experienceGained = 0;
  experiencesNeeded = 0;
  experiencesProvided = 0;
  materialsNeeded = { stones: 0, pills: 0 };
  weapons: Array<Weapon> = [];

  onOptionsChanged() {
    if (this.targetLv < 0) {
      this.targetLv = 0;
    } else if (this.targetLv > 100) {
      this.targetLv = 100;
    }

    this.experiencesNeeded = EXP[this.targetLv];
  }

  addWeapon() {
    this.weapons.push(new Weapon());
    this.collect();
  }

  removeWeapon(i) {
    this.weapons.splice(i, 1);

    this.collect();
  }

  collect() {
    this.experiencesProvided = this.weapons
      .map(____ => ____.resolveExperienceProdvided())
      .reduce((accu, curValue) => accu + curValue, 0)
      ;

    this.materialsNeeded = this.weapons
      .reduce((accu, curValue) => {
        accu.stones += (curValue.nModified * 5 + curValue.nStonesUsed) * curValue.count;
        accu.pills += curValue.nLegendarizes > 0 ? curValue.nPillsForLengendize * curValue.count : 0;

        return accu;
      }, { stones: 0, pills: 0 })
      ;
  }
}
