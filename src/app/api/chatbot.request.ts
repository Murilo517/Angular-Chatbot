import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:"root"})
export class chatBotRequest{

    private Base_URL = ""

    constructor(private http: HttpClient){ }
    getAnswers(){
            return this.http.get(`${this.Base_URL}`);
    }

}