import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DetailedWeatherComponent],
  exports: [DetailedWeatherComponent],
})
export class ComponentsModule {}
