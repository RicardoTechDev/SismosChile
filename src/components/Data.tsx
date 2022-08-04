import React, {useEffect, useState } from 'react';

interface Isismo {
    Fecha: string;
    Profundidad: string;
    Magnitud: string;
    RefGeografica: string;
    FechaUpdate: string;
}

export default function Data(){
    const [sismos, setSismo] = useState<Isismo[]>([]);
    const url = 'https://api.gael.cloud/general/public/sismos'

    const responseApi=async()=>{
        fetch(url)
        .then((response) => response.json())
        .then((json) => setSismo(json));
    }
    
    useEffect(() => {
        responseApi();
    }, []);

    return sismos;
}
