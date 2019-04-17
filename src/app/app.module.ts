import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GamesComponent } from "./games/games.component";
import { GameDetailComponent } from "./game-detail/game-detail.component";
import { MessageComponent } from "./message/message.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GameDesComponent } from "./game-des/game-des.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameDetailComponent,
    MessageComponent,
    DashboardComponent,
    GameDesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
