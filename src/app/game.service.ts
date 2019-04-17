import { Injectable } from "@angular/core";
import { Game, Detail } from "./game";
import { games } from "./mock-game";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  //依赖注入系统
  providedIn: "root"
})
export class GameService {
  private GameUrl = "api/gameDetails";
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  getGames(): Observable<Game[]> {
    //返回一个Obersavabel对象，在games.component中订阅
    this.log("Fetch Data");
    return of(games);
  }
  getDetail(): Observable<Detail[]> {
    return this.http.get<Detail[]>(this.GameUrl);
  }
  private log(message: string) {
    this.messageService.add(`GameService: ${message}`);
  }
}
