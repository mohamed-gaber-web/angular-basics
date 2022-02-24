import { Injectable } from "@angular/core";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { environment as env } from "src/environments/environment";
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({ providedIn: 'root', })


export class ApiService {

    constructor(private http: HttpClient) {
        console.log(env.urlRoot);
    }

    getCourse() {
        return this.http.get(`${env.urlRoot}/api/Course/GetCourses`, { params: {
            Offset: 0,
            Limit: 2
        } })
    }

    getPosts(): Observable<any> {
        // ** why data return obersvable ? because handle async data.
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            // !! handle error from service localy !!
            .pipe(catchError((error) => {
                return throwError('handle error insdie service localy', error);  
            }))
    }
}

/**
 * Service
 * decorator => @Injectable()
 * app.service.ts
 * provied
 * 1- @Injectable({ provideIn: root })
 * 2- module => providers: [ list of service ]
 * 3- in component providers: [ service ]
 * possible use service indoor service no problem
 * parent injector => module providers
 * each service contain token 
 * providers: [service] => providers: [ { provide: service, useClass: another service } ]
 * useClass => instant from service
 * useExisting => the same instant not create new instant
 * useValue: { value: '' } use value from her
 * useFactory create condition to use any service
 */