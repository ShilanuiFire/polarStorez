import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.fbLibrary();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
     });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  login() {
    window['FB'].login((response) => {
        console.log('login response', response);
        if (response.authResponse) {
          window['FB'].api('/me', {
            fields: 'last_name, first_name, email'
          }, (userInfo) => {
            console.log("user information");
            console.log(userInfo);
          });
        } else {
          console.log('User login failed');
        }
    }, {scope: 'email'});
}

  fbLibrary() {
    (window as any).fbAsyncInit = function() {
      window['FB'].init({
        appId      : '495488231144208',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      window['FB'].AppEvents.logPageView();
    };

    (function(d, s, id) {
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

}

}
