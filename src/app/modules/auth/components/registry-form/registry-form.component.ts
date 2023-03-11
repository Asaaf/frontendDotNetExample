import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/users/user/user';

@Component({
  selector: 'app-registry-form',
  templateUrl: './registry-form.component.html',
  styleUrls: ['./registry-form.component.css']
})
export class RegistryFormComponent {
  registryForm: FormGroup;
  user: User = new User();

  constructor(private formBuilder: FormBuilder) {
    this.registryForm = formBuilder.group({
      firstName: new FormControl()
    });
  }
}
