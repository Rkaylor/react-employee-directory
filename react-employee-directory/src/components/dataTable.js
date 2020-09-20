import React, { useContext } from "react";
import dataBody from "./dataBody";
import DataAreaContext from "../utils/DataAreaContext";

const dataTable = () => {
    const context = useContext(DataAreaContext);

    return(

        <div className="datatable mt-5">
        <table id="table" className="table table-striped table-hover table-condensed">
            <thead>
                <tr>
                    {context.developersState.headings.map(({ name, width}) => {
                return(
                    <th className="col" key={name} style={{ width }} onClick={() => {

                        context.handleSort(name);
                    }}
                    >
                        {name}
                        <span className="pointer"></span>
                        </th>
                );
                
                    })}
                </tr>
            </thead>

            <dataBody />
            </table>
            </div>
    );
}

export default dataTable;