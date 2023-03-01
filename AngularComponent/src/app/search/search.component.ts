import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string = 'Mobile';

  changeSearchValue(eventData: any){
    // console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }

}
