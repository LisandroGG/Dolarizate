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

    return(
        <div className={style.container}>
        {dolars.map(dolar => 
        <div className={style.dolares}> 
            <p>Dólar {dolar.nombre}</p>
            <p>Compra: {dolar.compra}</p>
            <p>Venta: {dolar.venta}</p>
            <p>Fecha de actualizacion: {dolar.fechaActualizacion.slice(0, -14)}</p>
        </div>)}
        </div>
    )
}

export default Dolars