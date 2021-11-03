import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'industries', component:IndustriesComponent},
    {path:'test', component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
