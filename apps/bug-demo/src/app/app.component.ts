import { Component } from '@angular/core';
import { ColDef } from '@ag-grid-community/core';

@Component({
  selector: 'cypress-ag-grid-bug-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model', editable: true },
    { field: 'price', editable: true }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

}
