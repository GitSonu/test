import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './CustomMaterialModule';
import { ToastrModule } from 'ngx-toastr';
import { TableListComponent } from './table-list/table-list.component';  // Module for Alert
import {MatNativeDateModule} from '@angular/material/core';
import { AddMemberComponent } from './add-member/add-member.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { MatFormFieldModule } from '@angular/material';
import { HttpClientModule } from  '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TableListComponent,
    AddMemberComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ToastrModule.forRoot(),   // Module for Alert
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TableListComponent, AddMemberComponent, DeleteComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],

})
export class AppModule { }
