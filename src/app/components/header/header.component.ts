import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showAddBtn: boolean = false;
  text: string = 'Add';
  color: string = 'green';


  title: string = 'Task Tracker';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log("Toggle ")
  }

}
