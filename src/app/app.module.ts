import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';

import { InfoCardComponent } from './components/info-card-main/info-card/info-card.component';
import { InfoCardMainComponent } from './components/info-card-main/info-card-main.component';
import { InfoCardSliderComponent } from './components/info-card-main/info-card-slider/info-card-slider.component';

import { register } from 'swiper/element/bundle';
import { NutritionalCardMainComponent } from './components/nutritional-card-main/nutritional-card-main.component';
import { NutritionalCardComponent } from './components/nutritional-card-main/nutritional-card/nutritional-card.component';
import { NutritionalCardSliderComponent } from './components/nutritional-card-main/nutritional-card-slider/nutritional-card-slider.component';
// register Swiper custom elements
register();
@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        InfoCardComponent,
        InfoCardMainComponent,
        InfoCardSliderComponent,
        NutritionalCardMainComponent,
        NutritionalCardComponent,
        NutritionalCardSliderComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        
       
    ]
})
export class AppModule { }
