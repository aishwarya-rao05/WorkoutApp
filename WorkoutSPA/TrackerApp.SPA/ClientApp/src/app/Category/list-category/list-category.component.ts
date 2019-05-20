import { Component } from '@angular/core';
import { WorkoutService } from '../../workout.service';
import { category } from '../../Category';

@Component({
    selector: 'app-list-category',
    templateUrl: './list-category.component.html',
    styleUrls: ['./list-category.component.css']
})
/** list-category component*/
export class ListCategoryComponent {
  /** list-category ctor */

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
