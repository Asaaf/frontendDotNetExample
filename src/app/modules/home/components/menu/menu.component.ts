import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private storageService: StorageService, private router: Router) {

  }

  logout() {
    this.storageService.removeItem("userToken");
    this.router.navigate(['/login']);
  }
}
