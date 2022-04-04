import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExampleTableComponent } from './example-table/example-table.component';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Route[] = [
  {
    path: 'tabulator',
    component: ExampleTableComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  },
  {
    path: '**',
    redirectTo: 'tabulator', pathMatch: 'full'
  }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes),
  MatFormFieldModule, MatInputModule ],
  declarations: [ AppComponent, HelloComponent, ExampleTableComponent, ReactiveFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
