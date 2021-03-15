import React from "react";
import DataGrid, { Selection, SearchPanel, GroupPanel } from "devextreme-react/data-grid";
import { data, columns } from "./data";
import { DataGridExampleProps } from "./interfaces";
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

export default function DataGridExample({ onToolbarPreparing, onSelectionChanged, selectedRowKeys }: DataGridExampleProps) {
    return (
        <DataGrid
            dataSource={data}
            columns={columns}
            onToolbarPreparing={onToolbarPreparing}
            onSelectionChanged={onSelectionChanged}
            showBorders={true}
            defaultSelectedRowKeys={selectedRowKeys}
        >
            <Selection mode="multiple" />
            <SearchPanel visible={true} />
            <GroupPanel visible={true} />
        </DataGrid>
    );
}
