import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh-Hant';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule,
  MatGridListModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import { RouterModule, Routes } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { SearchFoodComponent } from './search-food/search-food.component';
import { SearchRestaurantComponent } from './search-restaurant/search-restaurant.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { PageMenuComponent } from './page-menu/page-menu.component';
import { MainComponent } from './main/main.component';
import { RestaurantListComponent } from './search-restaurant/restaurant-list/restaurant-list.component';
import { FoodListComponent } from './search-food/food-list/food-list.component';
import { TestComponent } from './test/test.component';


registerLocaleData(zh);

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'search-food', component: SearchFoodComponent },
  { path: 'search-restaurant', component: SearchRestaurantComponent },
  { path: 'new-food', component: NewFoodComponent },
  { path: 'new-restaurant', component: NewRestaurantComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchFoodComponent,
    SearchRestaurantComponent,
    PageMenuComponent,
    MainComponent,
    NewFoodComponent,
    NewRestaurantComponent,
    RestaurantListComponent,
    FoodListComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatGridListModule,
    LayoutModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatMenuModule,
    RouterModule.forRoot(routes),
    MatSortModule,
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    { provide: LOCALE_ID, useValue: 'zh-Hant' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
