import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


export class RegInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const reqClone = req.clone({
        headers: req.headers.append('Authorization', 'bearer 12345' )
      });
      return next.handle(reqClone)

  }
}
