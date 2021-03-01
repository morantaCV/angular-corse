import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-app';
  shouldDisplayMovie: boolean = true;

  togleMovieComponent(){
    this.shouldDisplayMovie = !this.shouldDisplayMovie;
  }
}
