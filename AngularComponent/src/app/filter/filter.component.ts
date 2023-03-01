import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input('total') all: number = 0;
  @Input() available: number = 0;
  @Input() notavailable: number = 0;

  selectedRadioButtonValue: string = "All";

  @Output()
  filterRadioButtonSelectionChanges: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanges.emit(this.selectedRadioButtonValue);
  }
}
