import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Task} from "../../models/task";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  /** Gestion des dates */
  date: Date = new Date();

  /** L'affichage du Formulaire */
  active: boolean = true;

  /** Création d'une tâche */
  task: Task = new Task();

  /** Liste des Tâches */
  tasks: Task[] = [
    {
      id: 1,
      name: 'Faire une sieste 15min',
      status: false
    },
    {
      id: 2,
      name: 'Boire de l\'eau',
      status: true
    },
    {
      id: 3,
      name: 'Promener le chien',
      status: false
    },
    {
      id: 4,
      name: 'Donner à manger aux poissons',
      status: false
    },
    {
      id: 5,
      name: 'Payer les impôts...',
      status: true
    }
  ];

  /**
   * Déclenche l'enregistrement
   * d'une nouvelle tâche.
   */
  saveTask() {

    /**
     * Je vérifie si l'utilisateur à bien
     * saisie un "name" avant d'enregistrer.
     */
    if (undefined !== this.task.name) {

      /** Attribution d'un id */
      this.task.id = Date.now();

      /** Ajout de la tâche dans le tableau */
      this.tasks.push(this.task);

      /** Réinitialsation */
      this.active = false;
      setTimeout(() => this.active = true, 0);
      this.task = new Task();
    }
  }

  /**
   * Déclenche l'enregistrement
   * lors de la pression sur la
   * touche "Enter"
   * @param key
   */
  enterSave(key: string) {
    if (key === "Enter") {
      this.saveTask();
    }
  }

  /**
   * Permet la suppression
   * d'une tâche
   * @param task
   */
  deleteTask(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
}
