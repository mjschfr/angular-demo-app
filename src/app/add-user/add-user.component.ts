import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
    
    users = undefined

    constructor(private readonly db: AngularFirestore) {
        this.users = db.collection('users');
 	}

    ngOnInit() {}

    onSubmit(){

  	    var newUser = {
  		    firstName: this.model.firstName,
  		    lastName: this.model.lastName
  	    };
  	
         this.users.add(newUser);

    }
  
    model = new User('', '')

}
