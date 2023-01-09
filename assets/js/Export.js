function ExportToExcel(tableId, type, fn, dl) {
    var elt = document.getElementById(tableId);
    var wb = XLSX.utils.table_to_book(elt, { sheet: tableId });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || (tableId + "." + (type || 'xlsx')));
 }