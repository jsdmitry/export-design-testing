import React, { useState } from "react";
import { exportToPdf, exportToExcel } from "./export"
import DataGridExample from "./DataGridExample";
import "devextreme/ui/drop_down_button";
import "./variant3.css";

function onToolbarPreparing(e: any, isSelectedRows: boolean) {
    const component = e.component;
    e.toolbarOptions.items.splice(0, 0, {
        location: 'after',
        widget: 'dxDropDownButton',
        options: {
            dropDownOptions: { width: 250, deferRendering: false },
            text: 'Export',
            showArrowIcon: false,
            icon: 'export',
            keyExpr: 'id',
            displayExpr: 'text',
            items: [{
                id: 1,
                text: "Export all data to Excel",
                icon: 'xlsxfile',
                onClick: () => exportToExcel(false, component)
            }, {
                id: 2,
                text: "Export selected row to Excel",
                icon: 'xlsxfile',
                disabled: !isSelectedRows,
                onClick: () => exportToExcel(true, component)
            }, {
                id: 3,
                text: "Export all data to PDF",
                icon: 'pdffile',
                onClick: () => exportToPdf(false, component)
            }, {
                id: 4,
                disabled: !isSelectedRows,
                text: "Export selected row to PDF",
                icon: 'pdffile',
                onClick: () => exportToPdf(true, component)
            }]
        }
    });
}

export default function DataGridVariant3() {
    const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
    return (
        <DataGridExample
            onToolbarPreparing={(e:any) => onToolbarPreparing(e, selectedRowKeys.length > 0)}
            onSelectionChanged={(e:any) => setSelectedRowKeys(e.selectedRowKeys)}
            selectedRowKeys={selectedRowKeys}
        />
    );
}
