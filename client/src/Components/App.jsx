import s from './main.module.scss'

import Img from './Img'
import Main from './Main'

const App = () => {
    return (
        <div className={`${s.body}`}>
            <Img/>
            <Main/>
        </div>
    )
}

export default App