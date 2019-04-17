import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { GameService } from "../game.service";
@Component({
  selector: "app-game-des",
  templateUrl: "./game-des.component.html",
  styleUrls: ["./game-des.component.less"]
})
export class GameDesComponent implements OnInit {
  id: number;
  des: string;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private gameService: GameService
  ) {}

  getDetail(id: number) {
    let _this = this;
    this.gameService.getDetail().subscribe(function(details) {
      details.forEach(item => {
        if (item.id === id) {
          _this.des = item.detail;
        }
      });
    });
  }
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");
    this.getDetail(this.id);
  }
  back() {
    this.location.back();
  }
}
