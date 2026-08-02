import { Component, input } from '@angular/core';
import { Person } from '../models/Person'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-info-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-info-table.html',
  styleUrl: './manage-info-table.less',
})
export class ManageInfoTableComponent {
  records = input.required<Person[]>();
}