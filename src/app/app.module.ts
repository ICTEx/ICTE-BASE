import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {InViewportModule} from 'ng-in-viewport';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {MarketDataService} from './services/market-data.service';
import {ActionPanelService} from './services/action-panel.service';
import {PersistanceService} from './services/persistant-service';


import {SafeHtmlPipe} from './pipes/safe-html.pipe';
import {ActionPanelDirective} from './directives/action-panel.directive';
import {HeaderDirective} from './directives/header.directive';
import {FooterDirective} from './directives/footer.directive';

import {ActionPanelComponent} from './components/action-panel/action-panel.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';

import {HomeActionPanelComponent} from './components/home/home-action-panel/home-action-panel.component';
import {HeaderHomeComponent} from './components/home/header-home/header-home.component';
import {FooterHomeComponent} from './components/home/footer-home/footer-home.component';
import {HomeComponent} from './components/home/home.component';
import {ExampleActionPanelComponent} from './components/example/example-action-panel/example-action-panel.component';
import {ExampleComponent} from './components/example/example.component';


@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe,

    ActionPanelComponent,
    ActionPanelDirective,
    HeaderComponent,
    HeaderDirective,
    FooterComponent,
    FooterDirective,

    HomeComponent,
    HomeActionPanelComponent,
    HeaderHomeComponent,
    FooterHomeComponent,
    ExampleComponent,
    ExampleActionPanelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InViewportModule,
  ],
  entryComponents: [HeaderHomeComponent, FooterHomeComponent, HomeActionPanelComponent, ExampleActionPanelComponent],
  providers: [MarketDataService, ActionPanelService, PersistanceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
