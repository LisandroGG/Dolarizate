import style from '../Calculadora/Calculadora.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDolars } from '../../redux/actions'

const Calculadora = () => {

    const dispatch = useDispatch()
    const  dolars  = useSelector((state) => state.dolars)


    useEffect(() =>{
        dispatch(getDolars())
    }, [dispatch])


    //CALCULADORA
    const impuestos = 1.6

    const PrecioOficial = dolars.find((dolar) => dolar.casa === "oficial")
    const precioVentaOficial = PrecioOficial ? PrecioOficial.venta : null;

    const [monto, setMonto] = useState('');
    const [resultado, setResultado] = useState(null);
    const [sinImpuestos, setsinImpuestos] = useState(null);
    const cotizacionDolar = precioVentaOficial

    useEffect(() => {
        if (monto !== '') {
            const resultadoCalculado = parseFloat(monto) * cotizacionDolar;
            const resultadoFormateado = isNaN(resultadoCalculado) ? null : resultadoCalculado * impuestos;
            setsinImpuestos(resultadoCalculado.toFixed(2))
            setResultado(resultadoFormateado !== null ? resultadoFormateado.toFixed(2) : null);
        } else {
        setResultado(null);
        setsinImpuestos(null)
        }
    }, [monto, cotizacionDolar]);

    const handleInputChange = (event) => {
        setMonto(event.target.value);
    };

    return(
        <div className={style.container}>
            <div className={style.child}>
                <div className={style.title}>
                    <h2>Calculadora de impuestos para compras con dólares</h2>
                </div>
                <div className={style.calculadora}>
                    <label>
                        <p>Cantidad de dolares a pagar:</p>
                        <br/>
                        <span className={style.span}>USD</span><input className={style.input} type="number" value={monto} onChange={handleInputChange} /><span className={style.span}>.00</span>
                    </label>
                    
                    <h4>Cotizacion del dolar oficial: {cotizacionDolar}</h4>
                    <div className={style.result}>
                        <div className={style.concept}>
                        <h3>Concepto</h3>
                        <p>Total sin impuestos</p>
                        <p>Total con impuestos</p>
                        </div>
                        <div className={style.mount}>
                        <h3>Monto (ARS)</h3>
                        <p>${sinImpuestos}</p>
                        <p>${resultado}</p>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculadora