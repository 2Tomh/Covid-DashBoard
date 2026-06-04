import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-case-editor',
  templateUrl: './case-editor.component.html',
  styleUrls: ['./case-editor.component.css']
})
export class CaseEditorComponent implements OnInit {
  @Input() title: string = '';
  @Input() payload: any = { 
    firstName: '', 
    lastName: '', 
    condition: 'Active', 
    city: '', 
    date: '', 
    ageGroup: 0,
    isVaccinated: false,
    doseCount: 0
  };
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    if (!this.payload.date) {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();
      this.payload.date = `${dd}/${mm}/${yyyy}`;
    }
  }

  formatDate(event: any) {
    let input = event.target.value.replace(/\D/g, '');
    if (input.length > 2 && input.length <= 4) {
      input = input.slice(0, 2) + '/' + input.slice(2);
    } else if (input.length > 4) {
      input = input.slice(0, 2) + '/' + input.slice(2, 4) + '/' + input.slice(4, 8);
    }
    this.payload.date = input;
  }

  onSave() {
    if (!this.payload.firstName || !this.payload.lastName) {
      alert('חובה למלא שם פרטי ושם משפחה');
      return;
    }
    this.save.emit(this.payload);
  }

  onCancel() {
    this.close.emit();
  }
}