
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../shared/models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  /**
   * La tâche à créer
   */
  task: Task = new Task();

  @Output() newTaskEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Fonction appelée lors de
   * la création d'une tâche.
   */
  addTask() {
    // console.log(this.task);
    /**
     * Prévenir l'application qu'une
     * ,nouvelle tâche a été créée.
     */
    this.newTaskEvent.emit(this.task);
    // -- Réinitialisation de la Tâche
    this.task = new Task();
  }
}
