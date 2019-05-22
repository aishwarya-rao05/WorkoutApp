import { Component } from '@angular/core';
import { category } from '../../Category';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from '../../workout.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
/** delete-category component*/
export class DeleteCategoryComponent {

  cate: category;
  /** delete-category ctor */
  constructor(private currentRoute: ActivatedRoute, private service: WorkoutService, private router: Router) {

  }

  ngOnInit() {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.service.getById(id).subscribe(
      (data) => this.cate = data,
      (_error) => alert('notfound')
    );
  }

  delete() {
    this.service.delete(this.cate.category_id).subscribe(
      (data) => alert('deleted'),
      (error) => alert('failed to delete'))

  }
}
