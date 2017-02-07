import { Injectable } from '@angular/core';
import { Note } from '../model/note';
import { User } from '../model/user';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ModelService {

    private connectedUser: User;

    constructor() { }

    getConnectedUser() {
        return this.connectedUser;
    }

    setConnecteduser(user) {
        this.connectedUser = user;
    }
}
