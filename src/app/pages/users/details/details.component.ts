import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user.model";
import {UserService} from "../../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$?: Promise<User>

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.user$ = this.userService.getById(parseInt(id))
    } else {
      this.router.navigateByUrl('/not-found')
    }
  }

}
