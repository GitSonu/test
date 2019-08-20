import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeleteComponent } from '../delete/delete.component';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})

export class AddMemberComponent implements OnInit {
  public addCusForm: FormGroup;
  wasFormChanged = false;
  public breakpoint: number; // Breakpoint observer code
  product : any;

  constructor(private http: HttpClient,private fb: FormBuilder,
     public dialog: MatDialog, private toastr: ToastrService , private memberService : MemberService) { }

  public ngOnInit(): void {
    this.addCusForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      status:[true]
    });
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2; // Breakpoint observer code
  }

  openDialog(): void {
    if(this.addCusForm.dirty) {
      const dialogRef = this.dialog.open(DeleteComponent, {
        width: '320px',
      });
    } else {
      this.dialog.closeAll();
    }
  }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };




  AddMember() {

    this.memberService.addProduct(this.addCusForm.value).subscribe(
      res =>{
        console.log("POST Request is successful ", res);
      this.product = res;
      },
      error =>{
        console.log("Error", error);
      });
      this.toastr.success('Member has been Added', 'Success');
    // if(this.addCusForm.valid) {
    //   return this.http.post('http://192.168.137.251:8090/api/createuser ',JSON.stringify(this.addCusForm.value), this.httpOptions).subscribe(
    //     data  => {
    //     console.log("POST Request is successful ", data);
    //     },
    //     error  => {
    //     console.log("Error", error);
    //     });
    //   this.toastr.success('Member has been Added', 'Success');
    // }
  }

  formChanged() {
    this.wasFormChanged = true;
  }

  // tslint:disable-next-line:no-any
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

}


