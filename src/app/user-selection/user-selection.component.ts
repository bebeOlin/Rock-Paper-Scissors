import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {
  @Output() userSelection = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onButtonClicked(selection: string) {
    this.userSelection.emit(selection);
  }
}