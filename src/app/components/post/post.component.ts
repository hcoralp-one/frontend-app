import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  postForm!: FormGroup;

  constructor(private usuarioService: UsuarioService, 
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(){
    this.postForm = this.fb.group({
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      telefono: [null, [Validators.required]]
    })
  }

  post(){
    console.log(this.postForm.value);
    this.usuarioService.post(this.postForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/");
    })
  }
}
