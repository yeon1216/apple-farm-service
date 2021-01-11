import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import * as firebaseCredential from '../../../firebase-credential.json';

@Injectable()
export class FirebaseProvider {

    

    // public db: firebase.database.Database;
    public auth: firebase.auth.Auth;

    constructor() {
        const module =
        firebase.initializeApp({
                credential: firebase.credential.cert(firebaseCredential as firebase.ServiceAccount)
                // databaseURL: "",
            });
        // this.db = module.database();
        this.auth = module.auth();
    }
}
