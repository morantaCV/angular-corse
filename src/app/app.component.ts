import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-app';

  listOfMovies = ["Avangers", "Ironman", "Spiderman"]

  mainChar = "Tony Stark";

  movie ={
    movieName: 'Avangers 2',
    rating: 9
  }
}
