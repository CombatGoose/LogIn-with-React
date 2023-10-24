import {GoogleIcon} from './icons'

import s from './main.module.scss'

const Main = () => {
    return (
        <div className={`${s.secondBlock}`}>
            <div className={`${s.textContainer}`}>
                <p>Welcome back</p>
                <h2>Login to your account</h2>
            </div>
            <div className={`${s.logIn_menu}`}>
                <div>
                    <p>Email</p>
                    <input type="text" placeholder='John.snow@gmail.com' />
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" placeholder='*********' />
                </div>
            </div>
            <div className={`${s.more}`}>
                <div className={`${s.checkbox}`}>
                    <input id="checkbox" type="checkbox"/>
                    <label htmlFor="checbox">Remember me</label>
                </div>
                <p className={`${s.password}`}>Forgot password?</p>
            </div>
            <button className={`${s.btn} ${s.buttonLog}`}>Login now</button>
            <button className={`${s.btn} ${s.signWithGoogle}`}>
                <GoogleIcon className={`${s.icon}`}/>
                Or sign-in with Google
            </button>
        </div>
    )
}

export default Main