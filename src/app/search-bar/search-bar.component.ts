import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();

  term: string = '';

  getValue(event: any): string {
    return (event.target as HTMLInputElement).value;
  }
  onFormSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
