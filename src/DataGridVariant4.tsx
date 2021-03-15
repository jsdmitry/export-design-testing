import React, {useState} from "react";
import { exportToPdf, exportToExcel } from "./export"
import DataGridExample from "./DataGridExample";

function onToolbarPreparing(e: any, isSelectedRows: boolean) {
    const component = e.component;

    e.toolbarOptions.items.splice(0, 0, {
        location: 'after',
        widget: 'dxMenu',
        options: {
            onItemClick: (e: any) => {
                if(e.itemData.id === '1_1_1') {
                    exportToExcel(false, component);
                }
                else if(e.itemData.id === '1_1_2') {
                    exportToExcel(true, component);
                }
                else if(e.itemData.id === '1_2_1') {
                    exportToPdf(false, component);
                }
                else if(e.itemData.id === '1_2_2') {
                    exportToPdf(true, component);
                }
            },
            dataSource: [{
                id: '1',
                name: 'Export',
                icon: 'export',
                displayExpr: 'name',
                items: [{
                    id: '1_1',
                    name: 'Export to Excel',
                    icon: 'xlsxfile',
                    items: [{
                        id: '1_1_1',
                        name: 'Export all'
                    }, {
                        id: '1_1_2',
                        name: 'Export selected',
                        disabled: !isSelectedRows
                    }]
                }, {
                    id: '1_2',
                    name: 'Export to PDF',
                    icon: 'pdffile',
                    items: [{
                        id: '1_2_1',
                        name: 'Export all'
                    }, {
                        id: '1_2_2',
                        name: 'Export selected',
                        disabled: !isSelectedRows
                    }]
                }]
            }],
            displayExpr: 'name'
        }
    });
}

export default function DataGridVariant4() {
    const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
    return (
        <DataGridExample
            onToolbarPreparing={(e:any) => onToolbarPreparing(e, selectedRowKeys.length > 0)}
            onSelectionChanged={(e:any) => setSelectedRowKeys(e.selectedRowKeys)}
            selectedRowKeys={selectedRowKeys}
        />
    );
}
