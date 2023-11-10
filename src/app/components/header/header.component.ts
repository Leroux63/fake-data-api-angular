import {Component, OnInit} from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faHouse, faShop, faUser} from "@fortawesome/free-solid-svg-icons";
import {map, Observable} from "rxjs";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isConnected$?: Observable<boolean>
  iconHome: IconDefinition = faHouse
  iconShop: IconDefinition = faShop
  iconSignOut: IconDefinition = faUser

  //il est execute une seule fois à la création du composant
  constructor(private authService: AuthService, private router: Router) {
  }

  //le ngOnInit est executé à chaque fois que le composant est affiché
  ngOnInit(): void {
    //solution 1
    // const cbExecuteEachTimeNewNexted = (token: string | undefined)=>{
    //   this.isConnected = Boolean(token)
    // }
    //
    // this.authService
    //   .token$
    //   .subscribe(cbExecuteEachTimeNewNexted)

    //solution 2
    // this.authService
    //   .token$
    //  . subscribe((token: string | undefined) => this.isConnected = Boolean(token))

    //solution 3
    //opérer une transformation d'une string vers un boolean
    this.isConnected$ = this.authService
      .token$
      .pipe(
        map((token: string | undefined) => Boolean(token))
      )
  }

  onClickSignOut(): void {
    this.authService.signOut()
    this.router.navigateByUrl('/auth/signin')
  }
}
