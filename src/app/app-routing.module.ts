import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path: 'gallery', component: GalleryComponent},
  {path: 'gallery/:id', component: DetailsComponent},
  {path: '**', redirectTo: 'gallery', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
