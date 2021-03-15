import { Routes } from "@angular/router";
import { HomeComponent } from "./navigation/home/home.component";
import { ContactComponent } from "./institutional/contact/contact.component";
import { AboutComponent } from "./institutional/sobre/about.component";
import { ProductListComponent } from "./products/product-list/product-list.component";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContactComponent },
    { path: 'sobre', component: AboutComponent },
    { path: 'produtos', component: ProductListComponent },
    { path: 'produto-detalhe/:id', component: ProductListComponent }
];