import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WorkoutService } from './workout.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListCategoryComponent } from './Category/list-category/list-category.component';
import { EditCategoryComponent } from './Category/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './Category/delete-category/delete-category.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { AddWorkoutComponent } from './Create/add-workout/add-workout.component';
import { TrackWorkoutComponent } from './Track/track-workout/track-workout.component';
import { ViewWorkoutComponent } from './ViewAll/view-workout/view-workout.component';
import { EndWorkoutComponent } from './Track/end-workout/end-workout.component';
import { StartWorkoutComponent } from './Track/start-workout/start-workout.component';
import { EditWorkoutComponent } from './Create/edit-workout/edit-workout.component';
import { DeleteWorkoutComponent } from './Create/delete-workout/delete-workout.component';




@NgModule({
  declarations: [
    AppComponent,
    ListCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    AddCategoryComponent,
    AddWorkoutComponent,
    EditWorkoutComponent,
    DeleteWorkoutComponent,
    TrackWorkoutComponent,
    ViewWorkoutComponent,
    EndWorkoutComponent,
    StartWorkoutComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'category-list',
        component: ListCategoryComponent
      },
      {
        path: 'category-edit/:id',
        component: EditCategoryComponent
      },
      {
        path: 'category-delete/:id',
        component: DeleteCategoryComponent
      },
      {
        path: 'category-add',
        component: AddCategoryComponent
      },

      {
        path: 'add-workout',
        component: AddWorkoutComponent
      },
      {
        path: 'track-workout',
        component: TrackWorkoutComponent
      },
      {
        path: 'view-workout',
        component: ViewWorkoutComponent
      },
      {
        path: 'start-workout',
        component: StartWorkoutComponent 
      },
      {
        path: 'end-workout',
        component: EndWorkoutComponent
      },
      {
        path: 'edit-workout',
        component: EditWorkoutComponent
      },
      {
        path: 'delete-workout',
        component: DeleteWorkoutComponent
      },


    ])
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
