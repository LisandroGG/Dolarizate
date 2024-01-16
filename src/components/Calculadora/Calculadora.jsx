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
    const [selectedCotizacion, setSelectedCotizacion] = useState('oficial')

    const [monto, setMonto] = useState('');
    const [resultado, setResultado] = useState(null);
    const [sinImpuestos, setsinImpuestos] = useState(null);

    const formatNumber = (number) => {
        return number.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    useEffect(() => {
        if (monto !== '') {
        const PrecioSeleccionado = dolars.find((dolar) => dolar.casa === selectedCotizacion);
        const cotizacionSeleccionada = PrecioSeleccionado ? PrecioSeleccionado.venta : null;
    
          const resultadoCalculado = parseFloat(monto) * cotizacionSeleccionada;
          const resultadoFormateado = isNaN(resultadoCalculado) ? null : resultadoCalculado * impuestos;
        setsinImpuestos(resultadoCalculado !== null ? formatNumber(resultadoCalculado) : null);
        setResultado(resultadoFormateado !== null ? formatNumber(resultadoFormateado) : null);
        } else {
        setResultado(null);
        setsinImpuestos(null);
        }
    }, [monto, selectedCotizacion, dolars]);
    
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
    
        if (/^\d*\.?\d*$/.test(inputValue) || inputValue === '') {
        setMonto(inputValue);
        }
    };
    
    const handleCotizacionChange = (event) => {
        setSelectedCotizacion(event.target.value);
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
                        <select value={selectedCotizacion} onChange={handleCotizacionChange} className={style.select}>
                        {dolars
                .filter((dolar) => ['oficial', 'blue', 'tarjeta'].includes(dolar.casa))
                .map((dolar) => (
                <option key={dolar.casa} value={dolar.casa} className={style.option}>
                    {dolar.casa.toUpperCase()}
                </option>
                ))}
            </select>
                        <input className={style.input} type="number" value={monto} onChange={handleInputChange} /><span className={style.span}>.00</span>
                    </label>
                    
                    <div className={style.result}>
                        <table width="100%" border="1" cellpadding="0" cellspacing="0" bordercolor="#bdbdbd">
                        <tr>
                            <th><h3 className={style.concept}>Concepto</h3></th>
                            <th><h3 className={style.mount}>Monto (ARS)</h3></th>
                        </tr>
                        <tr>
                            <td><p className={style.concept}>Total sin impuestos</p></td>
                            <td><p className={style.mount}>${sinImpuestos}</p></td>
                        </tr>
                        <tr>
                            <td><p className={style.concept}>Total con impuestos</p></td>
                            <td><p className={style.mount}>${resultado}</p></td>
                        </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculadora