import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddMemberComponent } from '../add-member/add-member.component';
import { MatDialog } from '@angular/material';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  

  constructor(public dialog: MatDialog,private memberService : MemberService) { }

  displayedColumns: string[] = ['FirstName', 'LastName', 'Email', 'ProfilePic', 'Dob', 'Status', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  product : PeriodicElement[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.memberService.getAllProduct().subscribe(
      data=>{
        console.log(data);
      this.dataSource = data;
            }
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddMemberComponent,{
      width: '640px',disableClose: true
    });
  }
}

export interface PeriodicElement {
  firstname: string;
  LastName: string;
  email: string;
  mobileno: string;
  dob: string;
  Status: boolean;
}



// const ELEMENT_DATA: PeriodicElement[] = [
  
//   {FirstName: 'Charul', LastName: 'Hydrogen', Email: 'ch@gmail.com', ProfilePic: 'H', Dob: '22/11/1988', Status: true},
//   {FirstName: 'Sonu', LastName: 'Ahmedabad', Email: 'so@gmail.com', ProfilePic: 'H', Dob: '22/11/1988', Status: true},
//   {FirstName: 'Satish', LastName: 'Gandhinagar', Email: 'sa@gmail.com', ProfilePic: 'H', Dob: '22/11/1988', Status: true},
//   {FirstName: 'Jaypal', LastName: 'Hydrogen', Email: 'jh@gmail.com', ProfilePic: 'H', Dob: '22/11/1988', Status: true},
//   {FirstName: 'Mona', LastName: 'Hydrogen', Email: 'mh@gmail.com', ProfilePic: 'H', Dob: '22/11/1988', Status: true}
// ];
