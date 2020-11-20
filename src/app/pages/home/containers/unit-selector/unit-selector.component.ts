import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/shared/state/app.reducer';
import { Units } from 'src/app/shared/models/units.enum';
import * as fromConfigSelectors from '../../../../shared/state/config/config.selectors';
import * as fromConfigActions from '../../../../shared/state/config/config.actions';

@Component({
  selector: 'jv-unit-selector',
  templateUrl: 'unit-selector.component.html',
  styleUrls: ['unit-selector.component.scss'],
})
export class UnitSelectorComponent implements OnInit {
  unit$: Observable<Units>;
  unit: Units;

  unitsEnum = Units;

  currentUnit: string = 'Escala de medição: Grau Celsius';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.unit$ = this.store.pipe(select(fromConfigSelectors.selectUnitConfig));
    this.unit$.subscribe((unit) => (this.unit = unit));
  }

  updateUnit(unit: Units) {
    if (unit == 'Metric') {
      this.currentUnit = 'Escala de medição: Grau Celsius';
    } else if (unit == 'Imperial') {
      this.currentUnit = 'Escala de medição: Grau Fahrenheit';
    } else {
      this.currentUnit = 'Escala de medição: Kelvin';
    }

    this.store.dispatch(fromConfigActions.updateUnit({ unit }));
  }
}
