
import { Injectable } from "@angular/core";
import { Recipe } from "../recipe/recipe.model";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class HttpService{
    private backendURL = 'https://ex-ng-http.firebaseio.com/recipe.json';

    constructor(private http: Http){}


    httpSaveData(recipes : Recipe[]) : Observable<Response>{
        return this.http.put(this.backendURL , recipes);
    }

    httpFetchData() : Observable<Recipe[]> {
        return this.http.get(this.backendURL).map(
            (response : Response) => {
                return response.json();
            }
        );
    }

}