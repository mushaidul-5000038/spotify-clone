import './Player.css'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

const Player = () => {
    return (
        <div className='player'>
            <div className='player_body'>
                <Sidebar/>
                <Body/>

            </div>
            <Footer/>
        </div>
    )
}

export default Player
