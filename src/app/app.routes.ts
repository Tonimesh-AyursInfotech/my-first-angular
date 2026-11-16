import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home | BrightPath' },
  { path: 'about', component: About, title: 'About Us | BrightPath' },
  { path: 'contact', component: Contact, title: 'Contact | BrightPath' },
  { path: '**', redirectTo: '' }
];
