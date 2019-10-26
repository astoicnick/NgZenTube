import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchVideoComponent } from './Components/watch-video/watch-video.component';


const routes: Routes = [
  { path: 'watch', component: WatchVideoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
