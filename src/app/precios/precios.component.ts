import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.scss']
})
export class PreciosComponent implements OnInit {

  formularioPrecio: FormGroup;
  precios: any[] = new Array<any>();
  esEditar: boolean = false;
  id: string;


  constructor(private fb: FormBuilder, 
    private db: AngularFirestore,
) { }

  ngOnInit(): void {
    this.formularioPrecio = this.fb.group({
      nombre: ['', Validators.required],
      costo: ['', Validators.required],
      duracion: ['', Validators.required],
      tipoDuracion: [ '', Validators.required]
    })

    this.mostrarPrecios();

  }

  mostrarPrecios()
  {
    this.db.collection<any>('precios').get().subscribe((resultado)=>{
      this.precios.length =0;
      resultado.docs.forEach((dato)=>{
        let precio = dato.data() as any;
        precio.id = dato.id;
        precio.ref = dato.ref;
        this.precios.push(precio)
      });
    })
  }


  agregar(){
    this.db.collection<any>('precios').add(this.formularioPrecio.value).then(()=>{
      Swal.fire({
        title: 'Agregado!',
        text: 'Se agrego Correctamente',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      this.formularioPrecio.reset();
      this.mostrarPrecios();
    }).catch(()=>{
      Swal.fire({
        title: 'Agregado!',
        text: 'Se agrego Correctamente',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    })
  }

  editarPrecio(precio: any)
  {
    this.esEditar = true;
    this.formularioPrecio.setValue({
      nombre: precio.nombre,
      costo: precio.costo,
      duracion: precio.duracion,
      tipoDuracion: precio.tipoDuracion
    })
    this.id = precio.id;
  }


  editar(){
    this.db.doc('precios/' + this.id).update(this.formularioPrecio.value).then(()=>{
      Swal.fire({
        title: 'Agregado!',
        text: 'Se agrego Correctamente',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      this.formularioPrecio.reset();
      this.esEditar = false;
      this.mostrarPrecios();
    }).catch(()=>{
      Swal.fire({
        title: 'Agregado!',
        text: 'Se agrego Correctamente',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    })
  }


}
