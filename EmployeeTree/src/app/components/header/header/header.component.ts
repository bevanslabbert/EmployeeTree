import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  homeEl : any
  hierarchyEl : any
  scheduleEl : any
  logoutEl : any
  currentElement : any

  constructor(
    private router : Router,
    private authenticationService : AuthenticationService
  ) {
   
  }

  ngOnInit(): void {
    this.homeEl = document.getElementById('home')
    this.hierarchyEl = document.getElementById('hierarchy')
    this.scheduleEl = document.getElementById('schedules')
    this.logoutEl = document.getElementById('logout')
    this.homeEl.classList.add('selected')
    this.currentElement = this.homeEl  }

  home() : void {
    this.currentElement.classList.remove('selected')
    this.currentElement = this.homeEl
    this.homeEl.classList.add('selected')
    this.router.navigate(['home'])
  }

  hierarchy() : void {
    this.currentElement.classList.remove('selected')
    this.currentElement = this.hierarchyEl
    this.hierarchyEl.classList.add('selected')
    this.router.navigate(['hierarchy'])
  }

  schedules() : void {
    this.currentElement.classList.remove('selected')
    this.currentElement = this.scheduleEl
    this.scheduleEl.classList.add('selected')
    this.router.navigate(['schedules'])
  }

  logout() : void {
    this.currentElement.classList.remove('selected')
    this.currentElement = this.logoutEl
    this.logoutEl.classList.add('selected')
    this.authenticationService.logout()
    this.router.navigate(['login'])
  }
}
