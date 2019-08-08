import { Component, Input } from '@angular/core';

import { Book } from '@example-app/books/models';

@Component({
  selector: 'app-book-preview-list',
  template: `
    <app-book-preview *ngFor="let book of books" [book]="book"></app-book-preview>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `,
  ],
})
export class BookPreviewListComponent {
  @Input() books: Book[];
}
