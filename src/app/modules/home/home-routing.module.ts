import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '', 
    component: MainComponent,
    canActivate: [AuthGuard],
    children:[]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
