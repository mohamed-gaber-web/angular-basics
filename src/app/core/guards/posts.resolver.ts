import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { EMPTY } from "rxjs";
import { PostsService } from "../services/posts.service";

@Injectable({providedIn: 'root'})

export class PostsResolver implements Resolve<any> {
    id: any;
    constructor(private postServ: PostsService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.id = route.paramMap.get('postId');
        console.log(route);
        // const id = route.paramMap.get('postId');
        return this.id ? this.postServ.getPostById(this.id) : EMPTY
    }
}