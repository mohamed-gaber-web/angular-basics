import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
    
export class CustomeInterceptor implements HttpInterceptor{ 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('from custome interceptor ', req);
        
        // create clone from original headers
        req = req.clone({
            // headers: req.headers.append("authorization", 'Bearer hay')
            setHeaders: {
                "authorization": 'hello' // ** set headers authorization by toke
            }   
        })
        return next.handle(req);
    }
}

/** 
 * http request don't modifiy on original request but i take clone by [  // ** clone  ] method
*/