import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';

import {
  MatCardModule
} from '@angular/material';

import { BooksListComponent } from './books-list/books-list.component';

import { BooksService } from './books.service';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatCardModule
  ],
  declarations: [BooksComponent, BooksListComponent],
  providers: [BooksService]
})
export class BooksModule { }
