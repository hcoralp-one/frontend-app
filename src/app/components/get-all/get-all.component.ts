import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-get-all',
  standalone: false,
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.css'
})
export class GetAllComponent {

  usuarios: any = [];

  constructor(private usuarioService: UsuarioService){}

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.usuarioService.getAllUsuario().subscribe((res) => {
      console.log(res);
      this.usuarios = res;
    })
  }

  deleteUsuario(id: number){
    this.usuarioService.deleteUsuario(id).subscribe((res) => {
      console.log(res);
      this.getAll();
    })
  }

}
