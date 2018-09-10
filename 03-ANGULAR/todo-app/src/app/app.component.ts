import {Component} from '@angular/core';
import {Task} from './shared/models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // -- Notre tableau de tâches
  tasks: Task[] = [
    {
      id: 1,
      name: 'Faire la vaisselle',
      status: false
    },
    {
      id: 2,
      name: 'Sortir les poubelles',
      status: false
    },
    {
      id: 3,
      name: 'Sortir ma fiancée',
      status: true
    },
    {
      id: 4,
      name: 'Corriger les évaluations du PoleS',
      status: false
    },
  ];

  /**
   * L'utilisateur viens de
   * terminer une tâche.
   * @param {Task} task
   */
  taskIsDone(task: Task) {
    task.status = true;
  }

  /**
   * Lorsque l'utilisateur crée une tâche
   * dans "add-task", celle ci est récupérer
   * par "app-component" puis ajouté dans le
   * tableau de tâches.
   * @param taskFromEvent
   */
  newTask(taskFromEvent: Task) {
    this.tasks.push(taskFromEvent);
  }

  /**
   * L'utilisateur viens de supprimer
   * une tâche. On la retire du tableau.
   * @param task
   */
  removeTask(task: Task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
  }
}
