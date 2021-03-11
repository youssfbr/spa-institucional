import { Routes } from "@angular/router";
import { HomeComponent } from "./navigation/home/home.component";
import { ContactComponent } from "./institutional/contact/contact.component";
import { AboutComponent } from "./institutional/sobre/about.component";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContactComponent },
    { path: 'sobre', component: AboutComponent }
];