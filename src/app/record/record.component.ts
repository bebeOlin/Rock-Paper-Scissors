import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  @Input() wins = "";
  @Input() losses = "";
  @Input() streak = "";

  constructor() {}

  ngOnInit(): void {}

}
