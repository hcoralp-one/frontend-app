import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'] // corrección en el nombre
})
export class UpdateComponent implements OnInit {
  updateForm!: FormGroup;
  id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: UsuarioService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.params['id'];

    this.updateForm = this.fb.group({
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      telefono: [null, Validators.required]
    });

    this.getUsuarioById();
  }

  getUsuarioById() {
    this.service.getUsuarioById(this.id).subscribe((res) => {
      console.log(res);
      this.updateForm.patchValue(res);
    });
  }

  updateUsuario(){
    this.service.updateUsuario(this.id, this.updateForm.value).subscribe((res) => {
      console.log(res);
      if(res.id != null){
        this.router.navigateByUrl("");
      }
    })
  }
}
