import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CenterComponent } from './components/center/center.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './components/directives/directives.component';
import { ProductsComponent } from './components/products/products.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NumberonlyDirective } from './customes_directives/numberonly.directive';
import { HighlightDirective } from './customes_directives/highlight.directive';
import { BackButtonDirective } from './customes_directives/back-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CenterComponent,
    FooterComponent,
    CarouselComponent,
    DatabindingComponent,
    DirectivesComponent,
    ProductsComponent,
    NumberonlyDirective,
    HighlightDirective,
    BackButtonDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
