import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { WorkoutService } from '../../workout.service';

@Component({
    selector: 'app-edit-category',
    templateUrl: './edit-category.component.html',
    styleUrls: ['./edit-category.component.css']
})
/** edit-category component*/
export class EditCategoryComponent {
    /** edit-category ctor */


  constructor(private currentRoute: ActivatedRoute, private service: WorkoutService, private fb: FormBuilder) {
    get 
    }
}


