import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input('total') all: number = 0;
  @Input() available: number = 0;
  @Input() notavailable: number = 0;
}
