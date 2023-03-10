import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingScreenService } from 'src/app/services/loading-screen/loading-screen.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  activeRequest: number = 0;
  skippUrls = [
    '/authrefresh'
  ];

  constructor(private loadingScreenService: LoadingScreenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let displayLoadingScreen = true;

    for (const skippUrl of this.skippUrls) {
      if (new RegExp(skippUrl).test(request.url)) {
        displayLoadingScreen = false;
        break;
      }
    }

    if (displayLoadingScreen) {
      if (this.activeRequest === 0) {
        this.loadingScreenService.startLoading();
      }
      this.activeRequest++;

      return next.handle(request).pipe(
        finalize(() => {
          this.activeRequest--;
          if (this.activeRequest === 0) {
            this.loadingScreenService.stopLoading();
          }
        }));
    } else {
      return next.handle(request);
    }
  }
}
