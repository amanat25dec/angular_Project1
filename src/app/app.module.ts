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
import { EmployeeCrudComponent } from './components/employee-crud/employee-crud.component';

import { PipeComponent } from './components/pipe/pipe.component';
import { RemainingPipe } from './pipes/remaining.pipe';
import { OrdinalPipe } from './pipes/ordinal.pipe';
import { PrefixPipe } from './pipes/prefix.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { MysortPipe } from './pipes/mysort.pipe';
import { ParentsComponent } from './components/parents/parents.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { Products2Component } from './components/products2/products2.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Product3Component } from './components/product3/product3.component';
import { CommentsComponent } from './components/comments/comments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './components/user/user.component';
import { InterceptorService } from './interceptor.service';
import { RetryInterceptorService } from './retry-interceptor.service';
import { SuccessInterceptorService } from './success-interceptor.service';
import { EmployeeAjexComponent } from './components/employee-ajex/employee-ajex.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CarriesComponent } from './components/carries/carries.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Observable1Component } from './components/observable1/observable1.component';
import { Observable2Component } from './components/observable2/observable2.component';
import { Observable3Component } from './components/observable3/observable3.component';
import { Formdemo1Component } from './components/formdemo1/formdemo1.component';
import { Formdemo2Component } from './components/formdemo2/formdemo2.component';
import { Formdemo3Component } from './components/formdemo3/formdemo3.component';
import { Formdemo4Component } from './components/formdemo4/formdemo4.component';


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
    EmployeeCrudComponent,
    PipeComponent,
    RemainingPipe,
    OrdinalPipe,
    PrefixPipe,
    SearchPipe,
    MysortPipe,
    ParentsComponent,
    Child1Component,
    Child2Component,
    EmployeeComponent,
    Products2Component,
    UsersComponent,
    Product3Component,
    CommentsComponent,
    UserComponent,
    EmployeeAjexComponent,
    CartComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    CarriesComponent,
    ProductdetailComponent,
    NotFoundComponent,
    Observable1Component,
    Observable2Component,
    Observable3Component,
    Formdemo1Component,
    Formdemo2Component,
    Formdemo3Component,
    Formdemo4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RetryInterceptorService,
      multi: true
    },
   
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
