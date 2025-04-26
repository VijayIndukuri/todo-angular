import { Routes } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';


export const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'detail/:id', component: DetailComponent },
];
