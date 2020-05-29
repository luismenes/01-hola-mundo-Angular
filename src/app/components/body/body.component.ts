import {Component} from '@angular/core';

@Component({

    selector: 'app-body',
    templateUrl: `./body.component.html`
})

export class BodyComponent{

    mostrar: true; 

    // frase: any  = { 
    //     mensaje: 'Un gran poder requiere una gran responsabilidad',
    //     autor: 'Ben Parker'
    // };

    instrumentos: any = {

        nota: 'las personas que aprenden a tocar un instrumento musical son geniales!!',
        autor: 'Para tener encuenta'

    };



    personajes: string[] = ['Spiderman','Venom','Dr. Optupus'];

}

