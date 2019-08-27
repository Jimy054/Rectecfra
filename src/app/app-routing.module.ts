import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MathComponent } from "./math/math.component";
import { HistoryComponent } from "./history/history.component";
import { TechnologyComponent } from "./technology/technology.component";
import { SportComponent } from "./sport/sport.component";
import { AdditionComponent } from "./operations/addition/addition.component";
import { SubtractionComponent } from "./operations/subtraction/subtraction.component";
import { MultiplationComponent } from "./operations/multiplation/multiplation.component";
import { DivisionComponent } from "./operations/division/division.component";
import { GalileoComponent } from "./biography/galileo/galileo.component";
import { TeslaComponent } from "./biography/tesla/tesla.component";
import { AristotelesComponent } from "./biography/aristoteles/aristoteles.component";
import { IsaacComponent } from "./biography/isaac/isaac.component";
import { AndroidComponent } from "./tech/android/android.component";
import { IOSComponent } from "./tech/ios/ios.component";
import { WindowsComponent } from "./tech/windows/windows.component";
import { LinuxComponent } from "./tech/linux/linux.component";
import { RelaxComponent } from "./relax/relax.component";

const routes: Routes = [
  {
    path: "*",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "matematica",
    component: MathComponent
  },
  {
    path: "historia",
    component: HistoryComponent
  },
  {
    path: "tecnologia",
    component: TechnologyComponent
  },
  {
    path: "deporte",
    component: SportComponent
  },
  {
    path: "matematica/suma",
    component: AdditionComponent
  },
  {
    path: "matematica/resta",
    component: SubtractionComponent
  },
  {
    path: "matematica/multiplicacion",
    component: MultiplationComponent
  },
  {
    path: "matematica/division",
    component: DivisionComponent
  },
  {
    path: "historia/galileo",
    component: GalileoComponent
  },
  {
    path: "historia/tesla",
    component: TeslaComponent
  },
  {
    path: "historia/aristoteles",
    component: AristotelesComponent
  },
  {
    path: "historia/isaac",
    component: IsaacComponent
  },
  {
    path: "tecnologia/android",
    component: AndroidComponent
  },
  {
    path: "tecnologia/ios",
    component: IOSComponent
  },
  {
    path: "tecnologia/windows",
    component: WindowsComponent
  },
  {
    path: "tecnologia/linux",
    component: LinuxComponent
  },
  {
    path: "relax",
    component: RelaxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
