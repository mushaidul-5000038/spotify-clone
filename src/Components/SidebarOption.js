import './SidebarOption.css'
import {spotify} from '../App'
import { useDataLayerValue } from '../DataLayer';

const SidebarOption = ({Icon,title}) => {
    const [{response},dispatch] = useDataLayerValue()
    function ifClicked  () {
        var playlist_id='4GpBODwgLjOwL6JcBunQcr'
        if(title=='Nightstorms'){
            playlist_id='37i9dQZF1DX4aYNO8X5RpR'
        }
       
        else if(title=='Folk and Acoustic Mix'){
            playlist_id='37i9dQZF1EQp62d3Dl7ECY'
        }

        spotify.getPlaylist(playlist_id).then((response)=>{
            dispatch({
             type:'SET_PLAYLIST',
               response:response
            })
        })
          console.log('HELLO')
      
    }

    return (
        <div className='sidebar_option'>
            {Icon && <Icon className='sidebar_option_icon'/> }
            {Icon? <h4>{title}</h4> : <p onClick={()=>ifClicked()} className='playlist_title'>{title}</p>}
            
        </div>
    )
}

export default SidebarOption
