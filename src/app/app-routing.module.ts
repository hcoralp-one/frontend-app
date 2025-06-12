import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { GetAllComponent } from './components/get-all/get-all.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path: 'usuario', component: PostComponent},
  {path: '', component: GetAllComponent},
  {path: 'usuario/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
