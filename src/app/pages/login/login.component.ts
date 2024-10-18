import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Correct import

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Fixed typo: styleUrls instead of styleUrl
})
export class LoginComponent {

  isLoginView: boolean = true;

  userRegisterObj: any = {
    userName: '',
    password: '',
    emailId: ''
  }

  userLogin: any = {
    userName: '',
    password: ''
  }

  router = inject(Router); // Correct router injection

  onRegister() {
    const isLocalData = localStorage.getItem("angular18Local");
    if (isLocalData != null) {
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray));
    } else {
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray));
    }
    alert("Registration Success");
  }

  onLogin() {
    const isLocalData = localStorage.getItem("angular18Local");
    if (isLocalData != null) {
      const users = JSON.parse(isLocalData);
      const isUserFound = users.find((m: any) => m.userName === this.userLogin.userName && m.password === this.userLogin.password);
      if (isUserFound != undefined) {
        this.router.navigateByUrl('dashboard'); // Navigate to 'dashboard' route under LayoutComponent
      } else {
        alert("User name or password is Wrong");
      }
    } else {
      alert("No User Found");
    }
  }
  // onLogin() {
  //   console.log('Login button pressed');
  //   const isLocalData = localStorage.getItem("angular18Local");
  //   if (isLocalData != null) {
  //     const users = JSON.parse(isLocalData);
  //     console.log('Users from local storage:', users);
  
  //     const isUserFound = users.find((m: any) => m.userName === this.userLogin.userName && m.password === this.userLogin.password);
  //     console.log('User found:', isUserFound);
  
  //     if (isUserFound != undefined) {
  //       console.log('Navigating to dashboard...');
  //       this.router.navigateByUrl('/dashboard'); // Use absolute path to ensure it's correct
  //     } else {
  //       alert("User name or password is Wrong");
  //     }
  //   } else {
  //     alert("No User Found");
  //   }
  // }
  
}
