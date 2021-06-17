import './Login.css'
import {loginUrl} from "./Spotify"

const Login = () => {
    return (
        <div className='login_container'>
            <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='spotify_logo' className='spotify_login_logo'/>
            
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            
        </div>
    )
}

export default Login
