import { Component } from '@angular/core';
import { Tasks } from '../tasks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tasks : Tasks[] =[]
  newTask : string ;



  saveTask(){
    if(this.newTask.trim()){
      let task = new Tasks();
      task.name = this.newTask.trim();
      task.isCompleted = true;
      this.tasks.push(task);
      this.newTask ='';
    }else{
      alert('Please enter a task')
    }
  }

  done(id:number){
    this.tasks[id].isCompleted = !this.tasks[id].isCompleted;
  }

  remove(id:number){
    this.tasks=this.tasks.filter((v,i) => i !== id);
  }
  clearAllTasks(){
    this.tasks =[];
  }
}
