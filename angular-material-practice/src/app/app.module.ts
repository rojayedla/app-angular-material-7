import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableListComponent } from './dynamic-table/table-list/table-list.component';
import { AssertDataComponent } from './dynamic-table/assert-data/assert-data.component';

@NgModule({
  declarations: [
    AppComponent,TableListComponent, AssertDataComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
