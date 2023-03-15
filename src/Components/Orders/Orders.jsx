import React, { useEffect, useState } from "react";

const Orders = () => {
    //Variables de estado
    const [order, setOrder] = useState(true);
    const [cancel, setCancel] = useState(false);

    //Estado de efecto estableciendo temporizador de 2 segundos
    useEffect(() => {
        setTimeout(() => {
            setOrder(false);
        }, 2000);
    }, []);

  //Mostrar por consola cuando el componente se actualiza
    useEffect(() => {
        console.log("El componente fue actualizado");
    }, [order, cancel]);

    //Manejo del evento cancelar!
    const handleChange = () => {
        setCancel(true);
        alert("El pedido fue cancelado");
    };

    //Renderizar el componente
    return (
        <div>
            {order ? (
                <p style={{color: "green"}}>En proceso...</p>
                ) : (
                    <div>
                        <h2>Su pedido es:</h2>
                        {!cancel && (
                            <p style={{ color: "orange", padding: "10px 0" }}>
                                - Pizza Grande de Peperoni
                            </p>
                        )}
                    </div>
                )}

            <button onClick={handleChange}>Cancelar</button>
        </div>
    );
};

export default Orders;
