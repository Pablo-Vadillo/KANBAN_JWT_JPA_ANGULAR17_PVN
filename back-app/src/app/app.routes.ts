import { Routes } from '@angular/router';
import { MainScreenComponent } from './views/main-screen/main-screen.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UserInfoComponent } from './views/user-info/user-info.component';
import { KanbanScreenComponent } from './views/kanban-screen/kanban-screen.component';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    { path: "register", component: RegisterComponent},
    { path: "login", component: LoginComponent},
    { path: "mainScreen", component: MainScreenComponent},//anActivate: [AuthGuard]}
    { path: "userInfo", component: UserInfoComponent},//anActivate: [AuthGuard]}
    { path: "kanbanScreen", component: KanbanScreenComponent}//anActivate: [AuthGuard]}
];