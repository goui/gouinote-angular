import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { Note } from '../model/note';
import { User } from '../model/user';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class NetworkService {

    readonly BASE_URL = 'http://192.168.0.135:8080/';

    headers = new Headers();

    constructor(private http: Http) {
        this.headers.append('Content-Type', 'application/json');
    }

    getNoteList(): Observable<Note[]> {
        return this.http.get(this.BASE_URL + 'note/getAllNotes')
            .map((res: Response) => res.json());
    }

    createAccount(user): Observable<User> {
        return this.http.post(this.BASE_URL + 'user/createAccount', user, this.headers)
            .map((res: Response) => res.json());
    }

    signIn(username, password): Observable<User> {
        const data = new URLSearchParams();
        data.append('nickname', username);
        data.append('password', password);
        return this.http.post(this.BASE_URL + 'user/signIn', data, this.headers)
            .map((res: Response) => res.json());
    }
}
