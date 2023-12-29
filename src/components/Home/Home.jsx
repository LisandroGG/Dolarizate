import style from '../Home/Home.module.css'
import Dolars from '../Dolars/Dolars'


const Home = () => {
    return(
        <div className={style.mainContainer}>
        <Dolars />
        </div>
    )
}

export default Home