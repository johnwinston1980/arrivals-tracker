import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("drawer")
  public drawer: MatDrawer;

  title = 'arrivals-tracker';

  toggle(event) {    
    if (event == 'close') {
      this.drawer.close()
    }
    else if (event == 'toggle') {
      this.drawer.toggle()
    }
  }
}