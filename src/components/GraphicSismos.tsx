import React, {useEffect, useState } from 'react'
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/es';
import Data from './Data';
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


const GraphicSismos = () => {
    const sismos = Data();

    let dateSismos: any[] =[];
    let depthsSismos: any[] =[];

    sismos.map(sismo => {  
        dateSismos.push(moment(sismo.Fecha ).format('DD/MM/yyyy, h:mm a'));
        depthsSismos.push(sismo.Profundidad);
    });

    const data = {
        labels: dateSismos,
        datasets:[{
            label:'Profundidad',
            backgroundColor:'red',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'green',
            hoverBorderColor: "black",
            data: depthsSismos
        }]
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top' as const,
            },
            title: {
            display: true,
            text: 'Datos acerca de últimos sismos ocurridos en Chile.',
            },
        },
    };


    return (
        <div className='px-12 mb-10'>
            <Line 
                data={data}
                options={options}
            />

        </div>
    )
}

export default GraphicSismos