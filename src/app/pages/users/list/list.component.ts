import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {Router} from "@angular/router";
import {User} from "../../../models/user.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  users$?: Promise<User[]>;
  selectedUserDeleteConfirmation?: User
  showDeleteSuccessToast: boolean = false

  constructor(private userService: UserService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.getAll();
  }

  onClickDeleteUser(modalDeleteUser: any, user: User): void {
    this.selectedUserDeleteConfirmation = user

    const modal = this.modalService.open(modalDeleteUser)
    modal.result
      .then(() => {
        this.userService
          .deleteById(user.id)
          .then(() => {
            this.users$ = this.users$!
              .then(users => users.filter(u => u.id !== user.id))
            console.log(user.id)
            this.showDeleteSuccessToast = true
          })
      })
      .catch(() => {
      })
  }
}
