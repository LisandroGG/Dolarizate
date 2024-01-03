import style from '../Home/Home.module.css'
import Dolars from '../Dolars/Dolars'


const Home = () => {
    return(
        <div className={style.mainContainer}>

            <div className={style.container}>
            <h1 className={style.text}>Cotización del dólar HOY</h1>
            <h3 className={style.tipo}>Dólar Oficial, Dólar Blue, Dólar Bolsa, Dólar Mayorista, Dólar Cripto y Dólar Tarjeta</h3>
            </div>
            <Dolars />

            <div className={style.info}>
                <h1 className={style.inf}>Información</h1>
                <h3>Esta pagina utiliza la Api de DolarAPI, la cual trae toda la información sobre los dolares, tales como se pueden ver su nombre, compra, venta y ultima actualizacion.</h3><br/>
                <h3>Este es un proyecto personal por lo cual a medida que haya creciendo, voy a ir actualizando para que tenga mayor calidad.</h3>
            </div>
        </div>
    )
}

export default Home