import { Component, OnInit } from "@angular/core";
import { GameService } from "../game.service";
import { Game } from "../game";
import { MessageService } from "../message.service";
import { loadLContext } from "@angular/core/src/render3/discovery_utils";

@Component({
  selector: "app-games",
  templateUrl: "./games.component.html",
  styleUrls: ["./games.component.less"]
})
export class GamesComponent implements OnInit {
  games: Game[];
  selectedGame: Game;

  onSelect(game: Game): void {
    this.selectedGame = game;
    this.messageService.add(`${game.name} is selected`);
  }
  // private gameService = new GameService();
  constructor(
    private gameService: GameService,
    private messageService: MessageService
  ) {
    //参数等同于  private gameService = new GameService();
    //官方解释：
    //   这个参数同时做了两件事：1. 声明了一个私有 gameService 属性，2. 把它标记为一个 GameService 的注入点。
    //   当 Angular 创建 HeroesComponent 时，依赖注入系统就会把这个 heroService 参数设置为 HeroService 的单例对象。
    //
  }
  getGames(): void {
    const _this = this;
    this.gameService.getGames().subscribe(function(games) {
      //订阅getGames
      _this.games = games;
    });
  }
  ngOnInit() {
    this.getGames();
  }
}
