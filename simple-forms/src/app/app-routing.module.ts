import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RformComponent } from './rform/rform.component';
import { TformComponent } from './tform/tform.component';

const routes: Routes = [
  {path:"", redirectTo:"rform", pathMatch:"full"}, //there isno route
  {path:"rform", component:RformComponent},
  {path:"tform", component:TformComponent},
  {path:"**", component:RformComponent} // when non of the paths not matching 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
