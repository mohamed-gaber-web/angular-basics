import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { environment as env } from "src/environments/environment";

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