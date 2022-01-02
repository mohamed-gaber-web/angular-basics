import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()

export class AppInterceptors implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // create logic
        const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzYTg0YjEzYS04NmY3LTRkMjgtYTNmYi1iZmQ2YzRiOTczNzYiLCJ1bmlxdWVfbmFtZSI6Im1haG1vdWQuc2FhZEBzZGV4LmRrIiwiZW1haWwiOiJtYWhtb3VkLnNhYWRAc2RleC5kayIsImZpcnN0bmFtZSI6Ik1haG1vdWQiLCJsYXN0bmFtZSI6IlNhYWQiLCJwaG9uZU51bWJlciI6IjAxMTQ2MDEwNzkwIiwiZ2VuZGVyIjoiMCIsImJpcnRoZGF0ZSI6IjE4LTA1LTIwMjEiLCJsYW5ndWFnZSI6IkFyYWJpYyIsImxhbmd1YWdlSWNvbiI6Imh0dHBzOi8va2hycy1hZG1pbi5zZGV4Lm9ubGluZS9hc3NldHMvaW1hZ2VzL0xhbmd1YWdlLzEvNTlkMGExMGMtMGMzOS00YzNiLWIwMmItZmUwMWUzYjFjYzE0LnBuZyIsInJvbGUiOiJVc2VyIiwibmJmIjoxNjQwODgyNTI4LCJleHAiOjE2NDA5MTg1MjgsImlhdCI6MTY0MDg4MjUyOH0.h160qkw7a7icDD5azs12V89y1zorjbFPGh7I8sXRZCpmYzZe5EtwaPvYq2qAGaXSz1WqraLICL8YvqJHKM42xA"
        console.log("from interceptors", req, next);

        const reqHeaders = req.clone({
            setHeaders: {
                // Accept: 'application/json',
                // 'Content-Type': 'application/json',
                // Authorization: `Bearer ${localStorage.getItem('token')}`
                Authorization: `Bearer ${token}`
              }
        })
        
        return next.handle(reqHeaders)

        // new logic interceptors
    }

}