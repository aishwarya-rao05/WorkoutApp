import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WorkoutService } from './workout.service';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListCategoryComponent } from './Category/list-category/list-category.component';
import { EditCategoryComponent } from './Category/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './Category/delete-category/delete-category.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';





@NgModule({
  declarations: [
    AppComponent,
    ListCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
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

    ])
  ],
  providers: [WorkoutService],
  bootstrap: [AddCategoryComponent]
})
export class AppModule { }
