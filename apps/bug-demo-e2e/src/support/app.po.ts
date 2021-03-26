export type ColumnId = 'make' | 'model' | 'price';

const rowSelector = '[e2e = car-grid] .ag-center-cols-container .ag-row';
export const getGridRows = () => cy.get(rowSelector);
export const getGridRow = (row: number) =>
  getGridRows().get(`[row-index="${row}"]`);
export const getGridCell = (row: number, colId: ColumnId) =>
  getGridRow(row).find(`[col-id="${colId}"]`);

export function assertCellValue(
  row: number,
  colId: ColumnId,
  value: string,
) {
  getGridCell(row, colId).should('contain.text', value);
}

export function assertGridValues(
  values: {make: string, model: string, price: string}[],
) {
  values.forEach((row, rowIndex) => {
    assertCellValue(rowIndex, 'make', row.make);
    assertCellValue(rowIndex, 'model', row.model);
    assertCellValue(rowIndex, 'price', row.price);
  });
}

export function setModel(row: number, model: string) {
  getGridCell(row, 'model').type(`${model}{enter}`,);
}

export function setPrice(row: number, price: string) {
  getGridCell(row, 'price').type(`${price}{enter}`,);
}
