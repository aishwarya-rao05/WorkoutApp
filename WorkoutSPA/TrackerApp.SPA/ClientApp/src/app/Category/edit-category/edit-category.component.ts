import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../../workout.service';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { category } from '../../Category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
/** edit-category component*/
export class EditCategoryComponent implements OnInit {
  frmCatg: FormGroup;
  
  
  
  
  constructor(private currentRoute: ActivatedRoute, private service: WorkoutService, private fb: FormBuilder) { }

  get f() {
    return this.frmCatg.controls;
  }
  ngOnInit() {
    this.frmCatg = this.fb.group({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.service.getById(id).subscribe(
      (data) => (
        this.f.id.setValue(data.category_id),
        this.f.name.setValue(data.category_name)
      ),
      (erro) => alert('Not found')
    );

  }
  saveform(frm: NgForm) {
    if (frm.valid) {
      let dept: category = new category(frm.value.id, frm.value.name);
      this.service.update(dept).subscribe(
        (data) => alert('updated'),
        (erro) => alert('Error processing request')
      );
    }
  }


  }
  
 



