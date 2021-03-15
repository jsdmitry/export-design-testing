import React from "react";
import { exportToPdf, exportToExcel } from "./export"
import DataGridExample from "./DataGridExample";
import { custom } from 'devextreme/ui/dialog';
import { SelectedRowKeysType } from "./interfaces";

function exportRows(type: string, component: any, selectedRowKeys: SelectedRowKeysType) {
    if(selectedRowKeys.length) {
        const dialog = custom({
            title: 'Export',
            messageHtml: 'Choose export mode',
            buttons: [{
                text: 'Export selected rows',
                onClick: () => {
                    if(type === 'pdf') {
                        // export selected to pdf
                        exportToPdf(true, component);
                    } else {
                        // export selected to pdf
                        exportToExcel(true, component);
                    }
                }
            }, {
                text: 'Export all rows',
                onClick: () => {
                    if(type === 'pdf') {
                        // export all to pdf
                        exportToPdf(false, component);
                    } else {
                        // export all to excel
                        exportToExcel(false, component);
                    }
                }
            }, {
                text: 'Cancel',
                onClick: () => dialog.hide()
            }]
        });
        dialog.show();
    } else {
        if(type === 'pdf') {
            // export all to pdf
            exportToPdf(false, component);
        } else {
            // export all to excel
            exportToExcel(false, component);
        }
    }
}

function onToolbarPreparing(e: any) {
    const component = e.component;
    e.toolbarOptions.items.splice(0, 0, {
        location: 'after',
        widget: 'dxButton',
        options: {
            icon: 'xlsxfile',
            onClick: () => exportRows('xlsx', component, component.getSelectedRowKeys())
        }
    }, {
        location: 'after',
        widget: 'dxButton',
        options: {
            icon: 'pdffile',
            onClick: () => exportRows('pdf', component, component.getSelectedRowKeys())
        }
    });
}

export default function DataGridVariant1() {
    return (
        <DataGridExample onToolbarPreparing={onToolbarPreparing}/>
    );
}
