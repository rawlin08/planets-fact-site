import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet.component';
import { HeadingComponent } from './components/heading.component';
import { MenuComponent } from './components/menu.component';
import { OverviewComponent } from './components/overview.component';
import { InternalComponent } from './components/internal.component';
import { GeologyComponent } from './components/geology.component';
import { OptionsComponent } from './components/options.component';
import { BottomTabsComponent } from './components/bottom-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    HeadingComponent,
    MenuComponent,
    OverviewComponent,
    InternalComponent,
    GeologyComponent,
    OptionsComponent,
    BottomTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
