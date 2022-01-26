
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
//import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'services', component: ServicesComponent },
  { path:'services/:url', component: ServicesDetailsComponent },
  { path: 'examples', component: ExamplesComponent },
  { path:'contact-us', component: ContactPageComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
