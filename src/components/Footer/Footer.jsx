import style from '../Footer/Footer.module.css'
import github from '../../img/github.png'
import gmail from '../../img/sobre.png'
import linkedin from '../../img/linkedin.png'

const Footer = () => {
    return(
        <div className={style.container}>
            <div className={style.main}>
                <p className={style.copy}>© 2024 Dolarizate. Todos los derechos reservados.</p>
                <div className={style.red}>
                    <a className={style.github} href='https://github.com/LisandroGG' target='-blank'><img src={github} width='33px'></img></a>
                    <a className={style.gmail} href='mailto:lisandro.pereyra123456@gmail.com' target='-blank'><img src={gmail} width='33px'></img></a>
                    <a className={style.linkedin} href='https://www.linkedin.com/in/lisandro-pereyra-18503626a/' target='-blank'><img src={linkedin} width='33px'></img></a>
                </div>
            </div>

        </div>
    )
}

export default Footer