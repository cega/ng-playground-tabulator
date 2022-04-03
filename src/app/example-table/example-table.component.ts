import { AfterViewInit, Component, OnInit } from '@angular/core';
import Tabulator from 'tabulator-tables';

const persons = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    state: 'Ohio',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Doe',
    state: 'Iowa',
  },
  {
    id: '3',
    firstName: 'Bill',
    lastName: 'Great',
    state: 'Hawaii',
  },
  {
    id: '4',
    firstName: 'Ted',
    lastName: 'Adventure',
    state: 'Arizona',
  },
];

@Component({
  selector: 'app-example-table',
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.css'],
})
export class ExampleTableComponent implements OnInit, AfterViewInit {
  exTable: any;
  filterParam: string = '';

  tab = document.createElement('div');

  table_def = [
    { title: 'Id', field: 'id' },
    { title: 'First Name', field: 'firstName' },
    { title: 'Last Name', field: 'lastName' },
    { title: 'Location', field: 'state' },
  ];
  constructor() {}

  ngOnInit() {
    this.exTable = new Tabulator(this.tab, {
      height: 130,
      layout: 'fitColumns',
      columns: this.table_def,
      movableColumns: true,
      data: persons,
    });
    //    this.exTable.setData(persons);
    document.getElementById('ex-table-div').appendChild(this.tab);
  }
  ngAfterViewInit() {
    /* this.exTable?.setData(persons); */
  }
}
