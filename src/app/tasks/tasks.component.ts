import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

import { type NewTaskData } from "./new-task/new-task.model";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})



export class TasksComponent {
    @Input() name!: string;
    @Input({required: true}) userId!: string
    isAddingTask = false;
    
    

      get selectedUserTasks() {
        return 
      }

      onCompleteTask(id: string) {
      }

      onStartAddTask(){
        this.isAddingTask = true
      }

      onCancelAddTask(){
        this.isAddingTask = false
      }

      onAddTask(taskData: NewTaskData){

         this.isAddingTask = false
      }
}