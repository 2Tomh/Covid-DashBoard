import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-case-table',
  templateUrl: './case-table.component.html',
  styleUrls: ['./case-table.component.css']
})
export class CaseTableComponent {
  @Input() cases: any[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<string>();

  onEdit(c: any) { this.edit.emit(c); }
  onDelete(id: string) { this.delete.emit(id); }
}