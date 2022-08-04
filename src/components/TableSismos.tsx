import React from 'react';
import 'styled-components';
import DataTable , {createTheme} from 'react-data-table-component';
import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/es';
import Data from './Data';

const TableSismos: React.FC =() => {
    const sismos = Data();
    //Configuramos las columnas para Datatable
    const columns = [
        {   name: 'Fecha',
            selector: (row: any) => row.Fecha,
            format: (row: any) => moment(row.Fecha).format('dddd DD/MM/yyyy, h:mm a'),
            sortable: true,
        },
        {   name: 'Profundidad',
            selector:(row: any) => row.Profundidad + ' km',
            sortable: true,
            
        },
        {   name: 'Magnitud',
            selector: (row: any) =>row.Magnitud + ' ML',
            sortable: true,
        },
        {   name: 'Referencia Geográfica',
            selector: (row: any) => row.RefGeografica,
            sortable: true,
        },
    ];

    //Configuramos los textos para que aparescan en español
    const paginationOptions={
        rowsPerPageText: 'Registros por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos'
    }

return (
<div className="overflow-x-auto px-12 mb-10">
    <DataTable
        columns={columns}
        data={sismos}
        title='Últimos sismos ocurridos en Chile'
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight='500px'
        responsive
    />
    </div>
)
}

export default TableSismos