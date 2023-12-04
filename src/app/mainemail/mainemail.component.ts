import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from '@angular/fire/firestore';
@Component({
  selector: 'app-mainemail',
  templateUrl: './mainemail.component.html',
  styleUrls: ['./mainemail.component.css'],
})
export class MainemailComponent {
  @ViewChild('createData') data: any;
  firestore: Firestore = inject(Firestore);

  saveData(): void {
    const acollection = collection(this.firestore, 'subscribers');
    addDoc(acollection, {
      email: this.data.value.email,
      name: this.data.value.name,
    });
  }
  resetForm(): void {
    this.data.reset({
      name: ' ',
      email: ' ',
    });
  }
  constructor() {}

  submitForm(): void {
    if (this.data.valid) {
      this.saveData();
    }

    this.resetForm();
  }
}
