import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AddUserComponent } from '../add-user/add-user.component';

import {User} from '../user';

@Component({
	selector: 'app-user-summary',
	templateUrl: './user-summary.component.html',
	styleUrls: ['./user-summary.component.css']
})

export class UserSummaryComponent implements OnInit {
	userCollectionReference: AngularFirestoreCollection<User>;
	//users: Observable<any[]>;
  	users: Observable<User[]>;

  	constructor(private readonly db: AngularFirestore, public dialog:MatDialog) {
		
		//this.users = db.collection('users').valueChanges();
		this.userCollectionReference = db.collection<User>('users');

		this.users = this.userCollectionReference.snapshotChanges().map(actions => {
			return actions.map(action => {
				
				const data = action.payload.doc.data() as User;
				const id = action.payload.doc.id;
				return { id, ...data };
			});
		});
 	}
	
	ngOnInit() {}
	
	editUser(user){
	
	}

	deleteUser(user){
	debugger;

 // const dialogRef = this.dialog.open(UserDeleteDialog, {
 //      height: '350px'
 //    });

 //    dialogRef.afterClosed().subscribe(result => {
 //      console.log(`Dialog result: ${result}`);
 //    });




	this.userCollectionReference.doc(user.id).delete();
	//var doc = this.db.collection('users').ref.doc(user.id).delete();
	}
}

// @Component({
//   selector: 'user-delete-dialog',
//   templateUrl: 'user-delete-dialog.html',
// })
// export class UserDeleteDialog {}
