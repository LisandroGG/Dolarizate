import style from '../Donacion/Donacion.module.css'

const Donacion = () => {
    return(
        <div className={style.donaciones}>
                <h1 className={style.title}>¡Apoya el desarrolo de Dolarizate!</h1>
                <a href='https://cafecito.app/lisandrogg' className={style.link} target='-blank'>Donación vía Cafecito</a>
            </div>
    )
}

export default Donacion