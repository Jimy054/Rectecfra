import { Component, ChangeDetectorRef } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent {
  mobileQuery: MediaQueryList;

  contentNav = [
    { name: "Inicio", route: "home", icon: "home" },
    { name: "Matemáticas", route: "matematica", icon: "book" },
    { name: "Historía", route: "historia", icon: "terrain" },
    { name: "Tecnología", route: "tecnologia", icon: "laptop" },
    { name: "Relax", route: "relax", icon: "weekend" }
  ];
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;
}
