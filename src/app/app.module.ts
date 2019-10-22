import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './Components/search/search.component';
import { MaterialModule } from './MaterialImports';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WatchVideoComponent } from './Services/watch-video/watch-video.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WatchVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
