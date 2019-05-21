import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WorkoutService } from '../../workout.service';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
    selector: 'app-edit-category',
    templateUrl: './edit-category.component.html',
    styleUrls: ['./edit-category.component.css']
})
/** edit-category component*/
export class EditCategoryComponent {
    /** edit-category ctor */

  frmCatg: FormGroup; 
  //route service will give values in the route parameter
  constructor(private currentRoute: ActivatedRoute, private service: WorkoutService, private fb: FormBuilder) { }

  get f() {
    return this.frmCatg.controls;
  }

  ngOnInit() {
    this.frmCatg = this.fb.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('',[ Validators.required, Validators.minLength(3)])
    });
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.service.getById(id).subscribe(
      (data) => (
        this.f.id.setValue(data.category_id),
        this.f.name.setValue(data.category_name)
      ),
      (_error) => alert('Not found')
    );
}


