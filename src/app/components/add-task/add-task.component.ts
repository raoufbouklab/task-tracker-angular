import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/interfaces/task.interface';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;
  @Output() onAddTask = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggleAddTask().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
      id: Math.floor(Math.random() * 1000) + 1
    }

    this.onAddTask.emit(newTask);

    this.text = ''
    this.day = ''
    this.reminder = false;
  }

}
