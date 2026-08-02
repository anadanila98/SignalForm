import { Component, EventEmitter, Output, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { Person } from '../models/Person';
@Component({
  selector: 'app-manage-info',
  standalone: true,
  imports: [FormRoot, FormField],
  templateUrl: './manage-info.html',
  styleUrl: './manage-info.less',
})
export class ManageInfoComponent {
  @Output() saveRecord = new EventEmitter<Person>();

  model = signal<Person>({
    name: '',
    surname: '',
    telephone: '',
  });

  manageInfoForm = form(this.model);

  save(): void {
    this.saveRecord.emit(this.model());
    this.reset();
  }

  reset(): void {
    this.model.set({
      name: '',
      surname: '',
      telephone: '',
    });
  }
}