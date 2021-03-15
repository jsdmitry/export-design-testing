import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Model, StylesManager, Survey } from "survey-react";
import { SurveyProps } from "./interfaces";
import "survey-react/modern.css";
import "./index.css";
import DataGridVariant1 from "./DataGridVariant1";
import DataGridVariant2 from "./DataGridVariant2";
import DataGridVariant3 from "./DataGridVariant3";
import DataGridVariant4 from "./DataGridVariant4";


StylesManager.applyTheme("modern");

function SurveyComponent({ json }: SurveyProps) {
    useEffect(() => {
        ReactDOM.render(
            <DataGridVariant1/>,
            document.getElementById('variant1')
        );
        ReactDOM.render(
            <DataGridVariant2/>,
            document.getElementById('variant2')
        );
        ReactDOM.render(
            <DataGridVariant3/>,
            document.getElementById('variant3')
        );
        ReactDOM.render(
            <DataGridVariant4/>,
            document.getElementById('variant4')
        );
    });

    const survey = new Model(json);
    return (
        <Survey model={survey} />
    );
}

export default SurveyComponent;
