import s from './img.module.scss'

import Bg from './img/image1.png'

const Img = () => {
    return (
        <div className={`${s.firstBlock}`}>
            <img className={`${s.img}`} src={Bg} alt="img"/>
        </div>
    )
}

export default Img