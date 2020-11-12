import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ConnectedRoutingModule } from './connected-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { StatsComponent } from './components/stats/stats.component';
import { AdventureComponent } from './components/adventure/adventure.component';
import { DungeonInfoComponent } from './components/dungeon-info/dungeon-info.component';
import { StuffComponent } from './components/stuff/stuff.component';



@NgModule({
  declarations: [HomeComponent, SettingsComponent, HeaderComponent, StatsComponent, AdventureComponent, DungeonInfoComponent, StuffComponent],
  imports: [
    CommonModule,
    ConnectedRoutingModule
  ]
})
export class ConnectedModule { }
