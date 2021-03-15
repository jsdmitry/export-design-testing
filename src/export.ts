import { jsPDF } from "jspdf";
import * as ExcelJS from "exceljs";
import { exportDataGrid as exportDataGridToPdf } from "devextreme/pdf_exporter";
import { exportDataGrid as exportDataGridToExcel } from "devextreme/excel_exporter";
import "jspdf-autotable";
import FileSaver from "file-saver";

export function exportToPdf(selectedOnly: boolean, component: any) {
    const doc = new jsPDF();
    exportDataGridToPdf({
        jsPDFDocument: doc,
        component,
        selectedRowsOnly: selectedOnly
    }).then(() => doc.save("Customers.pdf"));
}

export function exportToExcel(selectedOnly: boolean, component: any) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Employees');

    exportDataGridToExcel({
        component,
        worksheet: worksheet,
        autoFilterEnabled: true,
        selectedRowsOnly: selectedOnly
    }).then(() => {
        workbook.xlsx.writeBuffer().then((buffer:any) => {
            FileSaver.saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Employees.xlsx');
        });
    });
}
