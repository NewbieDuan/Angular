import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { GamesComponent } from "./games/games.component";
import { GameDesComponent } from "./game-des/game-des.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "games",
    component: GamesComponent
  },
  {
    path: "describe/:id",
    component: GameDesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
