import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageInfoComponent } from './manage-info/manage-info';
import { ManageInfoTableComponent } from './manage-info-table/manage-info-table';
export interface Person {
  name: string;
  surname: string;
  telephone: string;
}

@Component({
  selector: 'app-root',
 imports: [
  ManageInfoComponent,
  ManageInfoTableComponent
],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.less'
})
export class App {
    records: Person[] = [];

  addRecord(person: Person) {
    this.records = [...this.records, person];
  }

  
}
