import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { WorkoutService } from '../../workout.service';
import { category } from '../../Category';

@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.css']
})
/** Add-Category component*/
export class AddCategoryComponent implements OnInit {
  /** Add-Category ctor */

  frmCat: FormGroup;
  constructor(private fb: FormBuilder, private service: WorkoutService) {

  }

  ngOnInit() {
    this.frmCat = this.fb.group({
      id: new FormControl('0', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  saveform(catg: NgForm) {
    if (catg.valid) {
      let ctg: category = new category(catg.value.id, catg.value.name);
      this.service.save(ctg).subscribe(
        (data) => alert('Added'),
        (error
        ) => alert('Error processing request')
      );
    }
  }


}
