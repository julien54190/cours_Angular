import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
//   public form: FormGroup
// = new FormGroup({
//   nom: new FormControl('', Validators.required),
//   email: new FormControl('', [Validators.required, Validators.email]),
//   hobbies: new FormArray([]),
//   password: new FormControl('')
// });
  public form: FormGroup = this.fb.group({
    nom: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    hobbies: this.fb.array([]),
    password: [''],
    gender: [''],
    city: [''],
    majeur: [''],
  });
  public cites = [
    { label: 'Paris', value: 'paris'},
    { label: 'Marseille', value: 'marseille'},
    { label: 'Metz', value: 'metz'},
    { label: 'Lyon', value: 'lyon'},
  ]
  public subscriptions = new Subscription();

  constructor(private fb: FormBuilder) {}

  get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }

  ngOnInit() {
    this.subscriptions.add(
      this.form.statusChanges.subscribe(status => {
        console.log(status);
      })
    );
    this.subscriptions.add(
      this.form.valueChanges.subscribe(value => {
        console.log(value);
      })
    );
  }

  addHobby() {
    this.hobbies.push(this.fb.control(''));
  }

  deleteHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  submit() {
    console.log(this.form.value);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
