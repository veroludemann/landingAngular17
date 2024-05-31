import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {


  contactForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.contactForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],


    })
  }

  //con esto anulamos y hacemos que no se actualice la pagina
  enviar(event: Event){
    event.preventDefault();
    console.log(this.contactForm.value);
  };

  ngOnInit(): void {

  }

  hasErrors (field:string, typeError:string){
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;

  }


}
