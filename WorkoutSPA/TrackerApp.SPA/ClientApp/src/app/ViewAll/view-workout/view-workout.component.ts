import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../workout.service';
import { category } from '../../Category';


@Component({
    selector: 'app-view-workout',
    templateUrl: './view-workout.component.html',
    styleUrls: ['./view-workout.component.css']
})
/** view-workout component*/

export class ViewWorkoutComponent {
  categorys: category[]
  constructor(private service: WorkoutService) {

  }
  ngOnInit() {
    this.service.getAll().subscribe(
      (data) => this.categorys = data,
      (error) => alert('error processing request')
    );
  }
  
}
