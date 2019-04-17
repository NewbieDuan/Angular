import { Component, OnInit, Input } from "@angular/core";

import { Game, Detail } from "../game";
import { GameService } from "../game.service";
import { MessageService } from "../message.service";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-game-detail",
  templateUrl: "./game-detail.component.html",
  styleUrls: ["./game-detail.component.less"]
})
export class GameDetailComponent implements OnInit {
  @Input() game: Game; //@Input()代因为父组件将会绑定到它

  constructor(private messageService: MessageService) {}

  ngOnInit() {}
}
