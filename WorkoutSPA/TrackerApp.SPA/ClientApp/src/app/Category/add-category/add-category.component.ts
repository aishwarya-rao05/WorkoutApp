import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  frmCatg: FormGroup;
  @Output() CategoryAdded = new EventEmitter<string>();
  constructor(private fb: FormBuilder, private service: WorkoutService) {

  }

  ngOnInit() {
    this.frmCatg = this.fb.group({
      
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  //property to access formgroup
  get f() {
    return this.frmCatg.controls;
  }


  saveform(frm: NgForm) {
    if (frm.valid) {
      let ctg: category = new category(frm.value.id, frm.value.name);
      this.service.save(ctg).subscribe(
        (data) => alert('Added'),
        (_error) => console.log('Error processing request')
      );
    }
  }


}
