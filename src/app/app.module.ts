import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

//Material
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule
} from "@angular/material";
import { MatGridListModule } from "@angular/material/grid-list";

//Componets
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { MathComponent } from "./math/math.component";
import { HistoryComponent } from "./history/history.component";
import { SportComponent } from "./sport/sport.component";
import { TechnologyComponent } from "./technology/technology.component";
import { AdditionComponent } from "./operations/addition/addition.component";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SubtractionComponent } from "./operations/subtraction/subtraction.component";
import { MultiplationComponent } from "./operations/multiplation/multiplation.component";
import { DivisionComponent } from "./operations/division/division.component";
import { AristotelesComponent } from "./biography/aristoteles/aristoteles.component";
import { TeslaComponent } from "./biography/tesla/tesla.component";
import { IsaacComponent } from "./biography/isaac/isaac.component";
import { GalileoComponent } from "./biography/galileo/galileo.component";
import { AndroidComponent } from './tech/android/android.component';
import { IOSComponent } from './tech/ios/ios.component';
import { WindowsComponent } from './tech/windows/windows.component';
import { LinuxComponent } from './tech/linux/linux.component';
import { RelaxComponent } from './relax/relax.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MathComponent,
    HistoryComponent,
    SportComponent,
    TechnologyComponent,
    AdditionComponent,
    SubtractionComponent,
    MultiplationComponent,
    DivisionComponent,
    AristotelesComponent,
    TeslaComponent,
    IsaacComponent,
    GalileoComponent,
    AndroidComponent,
    IOSComponent,
    WindowsComponent,
    LinuxComponent,
    RelaxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    LayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
