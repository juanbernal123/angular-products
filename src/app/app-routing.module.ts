import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './products/index/index.component';

const routes: Routes = [
  { path: "", component: AppComponent, title: "Proyecto Angular" },
  { path: "products", component: IndexComponent, title: "Productos" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
