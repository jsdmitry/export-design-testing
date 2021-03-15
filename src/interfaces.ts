import {dxElement} from "devextreme/core/element";
import {dxToolbarOptions} from "devextreme/ui/toolbar";
import DataGrid from "devextreme/ui/data_grid";

export interface SurveyProps {
    json: any
}

export interface DataGridExampleProps {
    onToolbarPreparing?: onToolbarPreparingArgs,
    onSelectionChanged?: onSelectionChangedArgs,
    selectedRowKeys?: any[]
}

export type SelectedRowKeysType = Array<any> & Promise<any> & JQueryPromise<any>;
export type onToolbarPreparingArgs = (e: { component?: DataGrid, element?: dxElement, model?: any, toolbarOptions?: dxToolbarOptions }) => any;
export type onSelectionChangedArgs = (e: { component?: DataGrid, element?: dxElement, model?: any, currentSelectedRowKeys?: Array<any>, currentDeselectedRowKeys?: Array<any>, selectedRowKeys?: Array<any>, selectedRowsData?: Array<any> }) => any;
