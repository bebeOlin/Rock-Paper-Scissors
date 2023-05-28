import {
  Component
} from '@angular/core';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = "";
  values = ["Rock", "Paper", "Scissors"];
  aiSelection = "";
  wins = 0;
  losses = 0;
  streak = 0;
  userSelection = "";
  title = 'Cat-Truck-Blood';

  constructor(private modalService: NgbModal) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  onButtonClicked(selection: string) {
    this.result = "";
    setTimeout(() => {
      this.getRandomSelection();
      this.userSelection = selection;
      this.decideWinner();
      console.log("I'm here.");
    }, 1000);
  }

  getRandomSelection(): string {
    let randomIndex = Math.floor(Math.random() * this.values.length);
    this.aiSelection = this.values[randomIndex];
    return this.values[randomIndex];
  }

  decideWinner() {
    if (this.aiSelection == "Rock") {
      if (this.userSelection == "Rock") {
        // Draw
        this.result = "Draw";
        this.streak = 0;
      } else if (this.userSelection == "Paper") {
        // Loseeeer
        this.result = "Lose";
        this.losses++;
        this.streak = 0;
      } else {
        // Winner
        this.result = "Win";
        this.wins++;
        this.streak++;
      }
    } else if (this.aiSelection == "Paper") {
      if (this.userSelection == "Rock") {
        // Winner
        this.result = "Win";
        this.wins++;
        this.streak++;
      } else if (this.userSelection == "Paper") {
        // Draw
        this.result = "Draw";
        this.streak = 0;
      } else {
        // Loser
        this.result = "Lose";
        this.losses++;
        this.streak = 0;
      }
    } else if (this.aiSelection == "Scissors") {
      if (this.userSelection == "Rock") {
        // Loser
        this.result = "Lose";
        this.losses++;
        this.streak = 0;
      } else if (this.userSelection == "Paper") {
        // Winner
        this.result = "Win";
        this.wins++;
        this.streak++;
      } else {
        // Draw
        this.result = "Draw";
        this.streak = 0;
      }
    }
  }
}