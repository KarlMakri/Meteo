import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

/**
 * export interface PeriodicElement {
  author: string;
  date: string;
  title: string;
  note: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, author: 'Magri', date: '2019', title: 'Le Petit Maltais', note: 'V'},
  {position: 2, author: 'Lomende', date: '2002', title: 'Le Paradis Blanc', note: 'V'},
  {position: 3, author: 'Sapouna', date: '2004', title: 'Koh Phi Phi', note: 'V'},
  {position: 4, author: 'Adryana', date: '2006', title: 'Le Message sous Marine', note: 'V'},
  {position: 5, author: 'Saskia', date: '2005', title: 'L\'humanité en péril', note: 'IV'},
  {position: 6, author: 'Carbon', date: '2008', title: 'Pourquoi c\'est si compliqué l\'amour ?', note: 'IV'},
  {position: 7, author: 'Nitrogen', date: '2002', title: 'Luca', note: 'V'},
  {position: 8, author: 'Oxygen', date: '2006', title: 'Le silence des étoiles', note: 'V'},
  {position: 9, author: 'Fluorine', date: '2009', title: 'Dans son silence', note: 'V'},
  {position: 10, author: 'Neon', date: '2019', title: 'Les furtifs', note: 'V'},
];

 */



@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

  /**
   * displayedColumns: string[] = ['position', 'author', 'date', 'title', 'note'];
  dataSource = ELEMENT_DATA;
   */


  message: string = 'Salut les Indiens, Le Menu du Jour !';
  patisseries: string[] = ['Dorade', 'Vin Blanc du Volcan', 'Fraisier', 'Charlotte', 'Baba au Rhum', 'Mille Feuille', ];
  listEleves: string[] = ['Robert', 'Karl', 'Nathaniel'];
  connected: boolean = false;
  age: number = 20;
  listJoueur: object[] = [{'nom' :'Ribaoff', 'prenom': 'Greg'}, {'nom':'Facebook', 'prenom': 'Mark' }];

  listBook: object[] = [

    {'author': 'Karl Magri', 'date': '2019', 'title': 'Le Petit Maltais', 'note': 'V'},
    {'author': 'Aurélie Lomenede', 'date': '2002', 'title': 'Le Paradis Blanc', 'note': 'V'},
    {'author': 'Vicky Sapouna', 'date': '2004', 'title': 'Koh Phi Phi', 'note': 'V'},
    {'author': 'Adryana Attard', 'date': '2003', 'title': 'Le Message sous Marine', 'note': 'V'}

];



  constructor() { }
  ngOnInit() {
  }



}
