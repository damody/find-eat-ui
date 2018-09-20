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
import { LayoutModule } from '@angular/cdk/layout';
import { SearchFoodComponent } from './search-food/search-food.component';
import { SearchRestaurantComponent } from './search-restaurant/search-restaurant.component';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    SearchFoodComponent,
    SearchRestaurantComponent
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
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    { provide: LOCALE_ID, useValue: 'zh-Hant' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
