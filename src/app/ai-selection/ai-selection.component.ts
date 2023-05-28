import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai-selection',
  templateUrl: './ai-selection.component.html',
  styleUrls: ['./ai-selection.component.css']
})
export class AiSelectionComponent implements OnInit {
@Input() aiSelection = "";
  constructor() { }

  ngOnInit(): void {
  }

}
