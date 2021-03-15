import React from "react";
import {exportToExcel, exportToPdf} from "./export"
import DataGridExample from "./DataGridExample";
import "devextreme/ui/drop_down_button";

function onToolbarPreparing(e: any) {
    const component = e.component;
    e.toolbarOptions.items.splice(0, 0, {
        location: 'after',
        widget: 'dxDropDownButton',
        options: {
            dropDownOptions: { width: 120 },
            text: 'Export',
            showArrowIcon: false,
            icon: 'export',
            keyExpr: 'id',
            displayExpr: 'text',
            items: [{
                id: 1,
                text: 'To Excel',
                icon: 'xlsxfile',
                onClick: () => exportToExcel(component.getSelectedRowKeys().length, component)
            }, {
                id: 2,
                text: 'To PDF',
                icon: 'pdffile',
                onClick: () => exportToPdf(component.getSelectedRowKeys().length, component)
            }]
        }
    });
}

export default function DataGridVariant2() {
    return (
        <DataGridExample onToolbarPreparing={onToolbarPreparing}/>
    );
}
