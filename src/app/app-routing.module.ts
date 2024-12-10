import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { FacultyComponent } from './faculty/faculty.component';
import { DepartmentsComponent } from './departments/departments.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'courses', component: CoursesComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'departments', component: DepartmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
