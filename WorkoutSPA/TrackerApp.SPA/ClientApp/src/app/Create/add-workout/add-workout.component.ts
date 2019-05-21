import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { category } from '../../Category';
import { WorkoutService } from '../../workout.service';

@Component({
    selector: 'app-add-workout',
    templateUrl: './add-workout.component.html',
    styleUrls: ['./add-workout.component.css']
})
/** Add-Workout component*/
export class AddWorkoutComponent {
  frmWorkout: FormGroup;
  public count: number = 0;
  categories: category[];
  /** addworkout ctor */

  constructor(private fb: FormBuilder, private service: WorkoutService ) {
    this.frmWorkout = this.fb.group({
      Title: new FormControl('', Validators.required),
      Note: new FormControl('', Validators.required),
      Calory: new FormControl(0, Validators.required)
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

  increase() {
    this.count = this.count + 0.1;
  }

  decrease() {
    if (this.count > 0) {
      this.count = this.count - 0.1;
    }
    else {
      this.count = 0;
    }
  }


}
