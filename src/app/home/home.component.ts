import { Component, OnInit  } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@/_models';
import { UserService, AuthenticationService} from '@/_services';
import { ViewChild } from '@angular/core';
import {CdTimerComponent, TimeInterface} from 'angular-cd-timer';
import {NgForm} from '@angular/forms';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
   
    currentUser: User;
    users = [];
   
    constructor(
    
        private authenticationService: AuthenticationService,
        private userService: UserService,
       
    ) {
        
        this.currentUser = this.authenticationService.currentUserValue;
    }

  
   
    ngOnInit() {
        this.loadAllUsers();
         
       
    }
   
    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
    
   
  




	
}