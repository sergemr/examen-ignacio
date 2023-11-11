import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, FormsModule, MatTooltipModule, MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  formData = {
    nombre: '',
    apellido: '',
    cedula: '',
    edad: '',
    correo: '',
    telefono: ''
  }

  onSummit() {
    console.log(this.formData)
    this.onReset


  }

  onReset() {
    this.formData = {
      nombre: '',
      apellido: '',
      cedula: '',
      edad: '',
      correo: '',
      telefono: ''
    }

  }
}
