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
  @Input() AddCate: category;
  @Output() EditCategory = new EventEmitter<category>();
  @Output() DeleteCategory = new EventEmitter<category>();

  //route service will give values in the route parameter
  public click: boolean = false;
  constructor(private currentRoute: ActivatedRoute, private service: WorkoutService, private fb: FormBuilder) { }

  get f() {
    return this.frmCatg.controls;
  }

  ngOnInit() {
    this.frmCatg = this.fb.group({

      name: new FormControl(this.AddCate.category_name, [Validators.required, Validators.minLength(3)])
    });

    let id = this.currentRoute.snapshot.paramMap.get('id');
  }

  //saveForm(frm: NgForm) {
  //  if (frm.valid) {
  //    this.f.name.disable();
  //    this.click = false;
  //    let cate: category = new category(this.AddCate.category_id, frm.value.name);
  //    this.service.update(cate).subscribe(
  //      (data) => alert('updated'),
  //      (error) => console.log(error)
  //    );
  //  }

  //}
  //public Enable(): void {
  //  this.f.name.enable();
  //  this.click = true;

  //}

  //deleteFrm(frm: NgForm) {
  //  let cate = new category(this.AddCate.category_id, frm.value.name);
    //this.CategoryDelete.emit(cate);
  }
    //this.service.getById(id).subscribe(
    //  (data) => (
        
    //    this.f.name.setValue(data.category_name)
    //  ),
    //  (_error) => alert('Not found')
    //);
 // }



