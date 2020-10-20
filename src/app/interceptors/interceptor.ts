import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var OSName = "Unknown OS";
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

    let request = req;
    request = req.clone({
      headers: new HttpHeaders({
        'x-user-browser': this.myBrowser(),
        'x-user-os': OSName
      })
    });
    return next.handle(request);
  }

  myBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
      return 'Opera';
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
      return 'Chrome';
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
      return 'Safari';
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
      return 'Firefox';
    } else if ((navigator.userAgent.indexOf("MSIE") != -1)) {
      return 'IE';
    } else {
      return 'unknown';
    }
  }
}