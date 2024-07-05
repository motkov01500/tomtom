import { Component } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { TomService } from './tom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: any = [];

  constructor(private tomService: TomService) {}

  selectedItem: string = '';
  search(event: AutoCompleteCompleteEvent) {
    this.tomService.getAll(event.query).subscribe({
      next: (findedItems: any) => {
        console.log(findedItems);
      },
    });
  }
}
