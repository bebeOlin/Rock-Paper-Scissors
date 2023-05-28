import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResultComponent } from './result/result.component';
import { RecordComponent } from './record/record.component';
import { AiSelectionComponent } from './ai-selection/ai-selection.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResultComponent,
    RecordComponent,
    AiSelectionComponent,
    UserSelectionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
