import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-filter',
  imports: [FormsModule],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.css'
})
export class TaskFilterComponent {

  filter: string = "";

  @Output() taskFilter = new EventEmitter<string>();

  filterTask() {
    this.taskFilter.emit(this.filter);
  }
}
