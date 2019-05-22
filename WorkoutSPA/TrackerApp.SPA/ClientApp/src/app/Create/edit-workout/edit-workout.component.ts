import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { category } from '../../Category';
import { WorkoutService } from '../../workout.service';

@Component({
    selector: 'app-edit-workout',
    templateUrl: './edit-workout.component.html',
    styleUrls: ['./edit-workout.component.css']
})
/** edit-workout component*/
export class EditWorkoutComponent {
   

  frmWorkout: FormGroup;

  categories: category[];

  constructor(private fb: FormBuilder, private service: WorkoutService) {
    this.frmWorkout = this.fb.group({
      Title: new FormControl('', Validators.required),
      Note: new FormControl('', Validators.required),

    });

  }

  saveForm(frm: NgForm) {
    if (frm.valid) {
      let cate: category = new category(frm.value.category_id, frm.value.name);
      this.service.save(cate).subscribe(
        (data) => alert('Added'),
        (error) => console.log(error)
      );
    }
  }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data) => this.categories = data,
      (error) => alert('Error')
    );
  }
}
