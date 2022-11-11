import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask = new EventEmitter();
  @Output() onToggleReminder = new EventEmitter();
  faTimes = faTimes;

  constructor() {

   }

  ngOnInit(): void {
  }

  deleteTask(task: Task){
    this.onDeleteTask.emit(task);
  }

  toggleReminder(task: Task) {
    this.onToggleReminder.emit(task);
  }

}
