import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.component.html',
  styleUrls: ['./editar-cita.component.scss']
})
export class EditarCitaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doctores = [
    { id: '1', name: 'Maximiliano Salinas Cabrera', especialidad: 'Masoterapeuta'},
    { id: '2', name: 'Marcelo Ambrosetti Bustos', especialidad: 'Proctólogo'},
    { id: '3', name: 'Yerko Gonzales Rubilar', especialidad: 'Cirugia'},
    { id: '4', name: 'Daniel Miranda Tobar', especialidad: 'Nutriologo'},
    { id: '5', name: 'Javier Oyarzo Alfaro', especialidad: 'Psicologo'},
    { id: '6', name: 'Pedro Quiroz Martinez', especialidad: 'Medico General'},
    { id: '7', name: 'Wenceslao Palma Carrasco', especialidad: 'Radiologo'},
  ];
}
