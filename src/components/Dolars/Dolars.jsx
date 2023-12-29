import style from '../Dolars/Dolars.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDolars } from '../../redux/actions'

const Dolars = () => {

    const dispatch = useDispatch()
    const  dolars  = useSelector((state) => state.dolars)


    useEffect(() =>{
        dispatch(getDolars())
    }, [dispatch])

    const Dolars = dolars.filter((dolar) => dolar.casa !== "contadoconliqui")

    return(
        <div className={style.container}>
        {Dolars.map(dolar => 
        <div className={style.dolares}> 
            <h2>DÓLAR {dolar.nombre.toUpperCase()}</h2>

            <div className={style.containerData}>
            <p className={style.buy}><p className={style.c}>Compra</p> <b className={style.compra}>${dolar.compra}</b></p>
            <p className={style.sell}><p className={style.v}>Venta</p> <b className={style.venta}>${dolar.venta}</b></p>
            </div>
            
            <p className={style.date}>Fecha de actualizacion: {dolar.fechaActualizacion.slice(0, -14)}</p>
        </div>)}
        </div>
    )
}

export default Dolars