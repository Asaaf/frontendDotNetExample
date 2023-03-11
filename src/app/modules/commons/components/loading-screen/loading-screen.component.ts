import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounce, debounceTime, Subscription } from 'rxjs';
import { LoadingScreenService } from 'src/app/services/loading-screen/loading-screen.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  loadingSubcription?: Subscription;

  constructor(private loadingScreenService: LoadingScreenService) { }

  ngOnInit() {
    this.loadingSubcription = this.loadingScreenService.loadingStatus.pipe(
      debounceTime(200)
    ).subscribe((value) => {
      this.loading = value;
    })
  }

  ngOnDestroy() {
    this.loadingSubcription?.unsubscribe();
  }
}
