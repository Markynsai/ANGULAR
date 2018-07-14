import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 




import { AppComponent } from './app.component';
import { ComboComponent } from './combo/combo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComboComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
