import SearchIcon from '@material-ui/icons/Search';
import {useDataLayerValue} from '../DataLayer'
import {Avatar} from '@material-ui/core'
import './Header.css' 
const Header = () => {
    const [{user},dispatch] = useDataLayerValue()
    return (
        <header>
        <div className='header_left'>
        <SearchIcon/>
        <input type='text' placeholder='Artists,songs or podcasts'
         className='search_input'/>
        </div>
        <div className='header_right'>
        <Avatar src={user?.images[0]?.url} alt='avatar'/>
        <h4>{user?.display_name}</h4>
        </div>


      </header>
    )
}

export default Header
