import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core'

@Component({
    selector: "app-movies",
    templateUrl: "./movies.component.html",
    styleUrls: ["./movies.component.scss"]
})

export class MoviesComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{
    title = "Movies Components works!";
    @Input() listOfMovies: string[];

    ngOnInit(){
        console.log('Movie on Init');
    }

    ngOnChanges(changes: SimpleChanges): void{
        console.log(changes);
    }

    ngAfterViewInit(){
        console.log('after ViewInit');
    }

    ngOnDestroy(): void{
        console.log('Destroy');
    }

    
}